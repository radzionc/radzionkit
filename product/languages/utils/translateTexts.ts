import { TranslationServiceClient } from '@google-cloud/translate'
import { toBatches } from '@lib/utils/array/toBatches'
import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'
import { recordFromKeys } from '@lib/utils/record/recordFromKeys'
import { extractTemplateVariables } from '@lib/utils/template/extractTemplateVariables'
import { injectVariables } from '@lib/utils/template/injectVariables'
import {
  mustacheVariablePattern,
  toMustacheTemplateVariable,
} from '@lib/utils/template/mustacheTemplate'
import { Language } from '@product/languages/Language'

import { getEnvVar } from '../getEnvVar'

const batchSize = 600

interface TranslateTextsParams {
  texts: string[]
  from: Language
  to: Language
}

export const translateTexts = async ({
  texts,
  from,
  to,
}: TranslateTextsParams): Promise<string[]> => {
  if (texts.length === 0) {
    return []
  }

  const variables = withoutDuplicates(
    texts.map(extractTemplateVariables).flat(),
  )

  const translationClient = new TranslationServiceClient()

  const batches = toBatches(texts, batchSize)

  const result = []
  for (const batch of batches) {
    const contents = batch.map((text) =>
      injectVariables({
        template: text,
        variablePattern: mustacheVariablePattern,
        variables: recordFromKeys(extractTemplateVariables(text), (text) =>
          toMustacheTemplateVariable(`var_${variables.indexOf(text)}`),
        ),
      }),
    )

    const request = {
      parent: `projects/${getEnvVar(
        'GOOGLE_TRANSLATE_PROJECT_ID',
      )}/locations/global`,
      contents,
      mimeType: 'text/plain',
      sourceLanguageCode: from,
      targetLanguageCode: to,
    }

    const [{ translations }] = await translationClient.translateText(request)
    if (!translations) {
      throw new Error('No translations')
    }

    result.push(
      ...translations.map((translation) => {
        const { translatedText } = translation
        if (!translatedText) {
          throw new Error('No translatedText')
        }

        return injectVariables({
          template: translatedText,
          variablePattern: mustacheVariablePattern,
          variables: recordFromKeys(
            extractTemplateVariables(translatedText),
            (variable) =>
              toMustacheTemplateVariable(
                variables[Number(variable.split('_')[1])],
              ),
          ),
        })
      }),
    )
  }

  return result
}
