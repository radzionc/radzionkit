import { VStack } from '@lib/ui/layout/Stack'
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
      render={({ setElement }) => (
        <VStack fullWidth ref={setElement}>
          <VStack fullWidth gap={20}>
            {children}
            <VStack fullWidth alignItems="end">
              {action}
            </VStack>
          </VStack>
        </VStack>
      )}
    />
  </ShyInfoBlock>
)
