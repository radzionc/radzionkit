import { Center } from '../layout/Center'
import { Hoverable } from '../base/Hoverable'
import { ChecklistItemFrame } from './ChecklistItemFrame'
import { PlusIcon } from '../icons/PlusIcon'
import { OnClickProp, ChildrenProp } from '../props'

type AddChecklistItemPromptProps = OnClickProp & ChildrenProp

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
