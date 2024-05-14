import { HStack, VStack } from '@lib/ui/layout/Stack'
import { ComponentWithChildrenProps } from '../props'
import { ReactNode } from 'react'
import { ElementSizeAware } from '../base/ElementSizeAware'
import { ShyInfoBlock } from './ShyInfoBlock'

type ActionPromptProps = ComponentWithChildrenProps & {
  action: ReactNode
}

export const ActionPrompt = ({ children, action }: ActionPromptProps) => (
  <ShyInfoBlock>
    <ElementSizeAware
      render={({ setElement, size }) => (
        <VStack fullWidth ref={setElement}>
          {size && size.width < 400 ? (
            <VStack fullWidth gap={8}>
              {children}
              <VStack fullWidth alignItems="center">
                {action}
              </VStack>
            </VStack>
          ) : (
            <HStack fullWidth justifyContent="space-between" gap={20}>
              {children}
              {action}
            </HStack>
          )}
        </VStack>
      )}
    />
  </ShyInfoBlock>
)
