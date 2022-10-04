import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { usePrevious } from "react-use";
import { useBoolean } from "lib/shared/hooks/useBoolean";
import styled from "styled-components";
import { CollapseToggleIconButton } from "lib/ui/buttons/square/CollapseToggleIconButton";
import { useKeyPress } from "lib/shared/hooks/useKeyPress";

import { InputWrapperWithErrorMessage } from "../InputWrapper";
import { TextInputContainer } from "../TextInput";
import { ComboboxOptions } from "./ComboboxOptions";
import { DropdownMenuPlacer } from "./DropdownMenuPlacer";

interface Props<T> {
  label: React.ReactNode;
  placeholder: string;
  error?: string;
  value: T | null;
  onChange: (value: T | null) => void;

  options: T[];
  optionToString: (option: T) => string;
  renderOption?: (option: T) => ReactNode;
  clearAfterOptionSelected?: boolean;
}

const Container = styled.div`
  position: relative;
`;

const ToggleWrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: 28px;
  display: flex;
`;

function FixedOptionsInputInner<T>(
  {
    label,
    placeholder,

    options,
    value,
    onChange,

    optionToString,

    error,
    renderOption = optionToString,
    clearAfterOptionSelected,
  }: Props<T>,
  ref: ForwardedRef<HTMLInputElement | null>
) {
  const containerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const [isMenuOpen, { set: openMenu, unset: closeMenu, toggle: toggleMenu }] =
    useBoolean(false);
  useEffect(() => {
    const isInputFocused = document.activeElement === inputRef.current;

    if (isMenuOpen && !isInputFocused) {
      inputRef.current?.focus();
    } else if (!isMenuOpen && isInputFocused) {
      inputRef.current?.blur();
    }
  }, [isMenuOpen]);

  const previousValue = usePrevious(value);

  const [inputValue, setInputValue] = useState("");

  const [suggestions, setSuggestions] = useState(options);

  useEffect(() => {
    const lowerCaseInputValue = inputValue.toLowerCase();

    const newSuggestions =
      value && optionToString(value).toLowerCase() === lowerCaseInputValue
        ? options
        : options.filter((item) =>
            optionToString(item).toLowerCase().includes(lowerCaseInputValue)
          );

    setSuggestions(newSuggestions);
  }, [inputValue, optionToString, options, value]);

  const isSelectionAvailalbe = isMenuOpen && suggestions.length > 0;

  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const handleSelectOption = useCallback(
    (option: T) => {
      const optionAsString = clearAfterOptionSelected
        ? ""
        : optionToString(option);
      setInputValue(optionAsString);

      onChange(option);
      closeMenu();
    },
    [optionToString, onChange, closeMenu, clearAfterOptionSelected]
  );

  useEffect(() => {
    if (previousValue !== value) {
      setInputValue(value ? optionToString(value) : "");
    }
  }, [optionToString, previousValue, value]);

  useKeyPress(
    "Enter",
    () => {
      if (highlightedIndex !== null) {
        handleSelectOption(suggestions[highlightedIndex]);
      }

      closeMenu();
    },
    { isEnabled: isSelectionAvailalbe, shouldStopPropagation: true }
  );

  return (
    <Container
      ref={containerRef}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) {
          closeMenu();
        }
      }}
    >
      <InputWrapperWithErrorMessage label={label} error={error}>
        <DropdownMenuPlacer
          menu={
            isMenuOpen && suggestions.length ? (
              <ComboboxOptions
                options={suggestions}
                renderOption={renderOption}
                optionToKey={optionToString}
                onOptionHighlight={setHighlightedIndex}
                onOptionSelect={handleSelectOption}
                highlightedIndex={highlightedIndex}
              />
            ) : undefined
          }
        >
          <TextInputContainer
            onChange={({ currentTarget }) => setInputValue(currentTarget.value)}
            value={inputValue}
            isValid={!error}
            placeholder={placeholder}
            ref={inputRef}
            onFocus={openMenu}
          />
        </DropdownMenuPlacer>
      </InputWrapperWithErrorMessage>
      <ToggleWrapper>
        <CollapseToggleIconButton
          as="div"
          isOpen={isMenuOpen}
          onMouseDown={toggleMenu}
          onTouchStart={toggleMenu}
        />
      </ToggleWrapper>
    </Container>
  );
}

// Redecalare forwardRef
declare module "react" {
  function forwardRef<T, P>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export const FixedOptionsInput = forwardRef(FixedOptionsInputInner);
