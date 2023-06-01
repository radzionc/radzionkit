import {
  ClickableComponentProps,
  ComponentWithChildrenProps,
} from 'lib/shared/props'
import { Center } from '../Center'
import { Hoverable } from '../Hoverable'
import { ChecklistItemFrame } from './ChecklistItemFrame'
import { PlusIcon } from '../icons/PlusIcon'

type AddChecklistItemPromptProps = ClickableComponentProps &
  ComponentWithChildrenProps

export const AddChecklistItemPrompt = ({
  onClick,
  children,
}: AddChecklistItemPromptProps) => {
  return (
    <Hoverable onClick={onClick}>
      <ChecklistItemFrame>
        <Center>
          <PlusIcon />
        </Center>
        {children}
      </ChecklistItemFrame>
    </Hoverable>
  )
}
