import nlp from 'compromise'

export const getWordBaseForm = (word: string): string => {
  const doc = nlp(word)

  // Try to get singular form if it's a noun
  const singularForm = doc.nouns().toSingular().text()
  if (singularForm && singularForm !== word) {
    return singularForm
  }

  // Try to get the base form of a verb
  const baseForm = doc.verbs().toInfinitive().text()
  if (baseForm && baseForm !== word) {
    return baseForm
  }

  // Try to get the normal form of an adjective
  const adjective = doc.adjectives()
  const adjectiveResult = adjective.conjugate()[0]
  if (
    adjectiveResult &&
    typeof adjectiveResult === 'object' &&
    'positive' in adjectiveResult &&
    typeof adjectiveResult.positive === 'string'
  ) {
    return adjectiveResult.positive
  }

  // Return the original word if no transformation was found
  return word
}
