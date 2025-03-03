import { FloatingFocusManager } from '@floating-ui/react'
import { Button } from '@lib/ui/buttons/Button'
import { UnstyledButton } from '@lib/ui/buttons/UnstyledButton'
import { WithSecondaryAction } from '@lib/ui/buttons/WithSecondaryAction'
import { HStack, vStack, VStack } from '@lib/ui/css/stack'
import { TitledFloatingOptionsContainer } from '@lib/ui/floating/TitledFloatingOptionsContainer'
import { useFloatingOptions } from '@lib/ui/floating/useFloatingOptions'
import { CloseIcon } from '@lib/ui/icons/CloseIcon'
import { IsActiveProp, InputProps } from '@lib/ui/props'
import { OptionContent } from '@lib/ui/select/OptionContent'
import { OptionItem } from '@lib/ui/select/OptionItem'
import { getColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'

import { IconWrapper } from '../../icons/IconWrapper'
import { ListFilterIcon } from '../../icons/ListFilterIcon'

const Opener = styled(Button)<IsActiveProp>`
  border: 1px solid transparent;
  outline: none;
  ${({ isActive }) =>
    isActive &&
    css`
      border-color: ${getColor('contrast')};
    `}
`

const Content = styled(UnstyledButton)<IsActiveProp>`
  ${vStack({
    justifyContent: 'center',
  })}

  outline: none;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${getColor('contrast')};
    `}
`

type FilterProps<T> = InputProps<T | null> & {
  items: readonly T[]
  getItemKey: (item: T) => string
  renderItem: (item: T) => React.ReactNode
  title: string
}

export function Filter<T>({
  items,
  value,
  onChange,
  getItemKey,
  renderItem,
  title,
}: FilterProps<T>) {
  const selectedItem = value

  const {
    getReferenceProps,
    getFloatingProps,
    getOptionProps,
    isOpen,
    setIsOpen,
    activeIndex,
    context,
  } = useFloatingOptions({
    selectedIndex: null,
    strategy: 'fixed',
    placement: 'bottom-end',
    options: items.map(getItemKey),
  })

  return (
    <>
      {selectedItem ? (
        <WithSecondaryAction height={40}>
          <Content isActive={isOpen} {...getReferenceProps()}>
            {renderItem(selectedItem)}
          </Content>
          <UnstyledButton
            onClick={() => {
              onChange(null)
            }}
            title="Remove filter"
          >
            <CloseIcon />
          </UnstyledButton>
        </WithSecondaryAction>
      ) : (
        <Opener
          kind="ghost"
          size="s"
          isActive={isOpen}
          {...getReferenceProps()}
        >
          <HStack alignItems="center" gap={8}>
            <IconWrapper>
              <ListFilterIcon />
            </IconWrapper>
            Filter
          </HStack>
        </Opener>
      )}
      {isOpen && (
        <FloatingFocusManager context={context} modal returnFocus>
          <TitledFloatingOptionsContainer title={title} {...getFloatingProps()}>
            <VStack>
              {items.map((item, index) => (
                <OptionItem
                  key={getItemKey(item)}
                  isActive={activeIndex === index}
                  {...getOptionProps({
                    index,
                    onSelect: () => {
                      onChange(item)
                      setIsOpen(false)
                    },
                  })}
                >
                  <OptionContent>{renderItem(item)}</OptionContent>
                </OptionItem>
              ))}
            </VStack>
          </TitledFloatingOptionsContainer>
        </FloatingFocusManager>
      )}
    </>
  )
}
