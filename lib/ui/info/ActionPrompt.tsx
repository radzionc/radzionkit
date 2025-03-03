import { VStack } from '@lib/ui/css/stack'

import { ElementSizeAware } from '../base/ElementSizeAware'
import { ActionProp, ChildrenProp } from '../props'

import { ShyInfoBlock } from './ShyInfoBlock'

type ActionPromptProps = ChildrenProp & ActionProp

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
