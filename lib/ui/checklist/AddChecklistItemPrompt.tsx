import { Hoverable } from '../base/Hoverable'
import { PlusIcon } from '../icons/PlusIcon'
import { Center } from '../layout/Center'
import { OnClickProp, ChildrenProp } from '../props'

import { ChecklistItemFrame } from './ChecklistItemFrame'

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
