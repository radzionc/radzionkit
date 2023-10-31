import React, { forwardRef, useEffect, useState, ForwardedRef } from 'react'
import { FixedOptionsInput } from '@reactkit/ui/ui/inputs/Combobox/FixedOptionsInput'
import { SelectedOption } from '@reactkit/ui/ui/inputs/Select/SelectedOption'
import { HStack, VStack } from '@reactkit/ui/layout/Stack'

import { languagesNames, languages, languageCodeForName } from './languages'

interface Props {
  value: string[]
  onChange: (value: string[]) => void
  error?: string
}

const getAvailableLanguageNames = (selectedLanguages: string[]) => {
  const languagesSet = new Set(languagesNames)
  selectedLanguages
    .map((code) => languages[code].name)
    .forEach((language) => {
      languagesSet.delete(language)
    })

  return Array.from(languagesSet)
}

export const LanguagesInput = forwardRef(function InnerLanguagesInput(
  { value, onChange, error }: Props,
  ref: ForwardedRef<HTMLInputElement | null>,
) {
  const [availableLanguageNames, setAvaialableLanguageNames] = useState(() =>
    getAvailableLanguageNames(value),
  )

  useEffect(() => {
    setAvaialableLanguageNames(getAvailableLanguageNames(value))
  }, [value])

  const handleAddLanguage = (language: string) => {
    onChange([...value, languageCodeForName[language]])
  }

  const handleRemoveLanguage = (language: string) => {
    onChange(value.filter((v) => v !== language))
  }

  return (
    <VStack>
      <FixedOptionsInput
        label="Languages"
        placeholder="Spanish"
        value={null}
        ref={ref}
        onChange={(value) => {
          if (value) {
            handleAddLanguage(value)
          }
        }}
        error={error}
        optionToString={(option) => option}
        options={availableLanguageNames}
        clearAfterOptionSelected
      />
      <HStack gap={8} wrap="wrap">
        {value.map((language) => (
          <SelectedOption
            key={language}
            value={languages[language].name}
            onRemove={() => handleRemoveLanguage(language)}
          />
        ))}
      </HStack>
    </VStack>
  )
})
