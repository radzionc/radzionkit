import { VStack } from '@lib/ui/css/stack'
import { ComponentWithActionProps, ComponentWithChildrenProps } from '../props'
import { ElementSizeAware } from '../base/ElementSizeAware'
import { ShyInfoBlock } from './ShyInfoBlock'

type ActionPromptProps = ComponentWithChildrenProps & ComponentWithActionProps

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
