import { useState } from 'react'
import { VStack } from '@lib/ui/layout/Stack'
import { Opener } from '@lib/ui/base/Opener'
import { updateAtIndex } from '@lib/utils/array/updateAtIndex'
import { ChecklistItem } from '@lib/ui/checklist/ChecklistItem'
import { AddChecklistItemPrompt } from '@lib/ui/checklist/AddChecklistItemPrompt'
import { ChecklistItemForm } from '@lib/ui/checklist/ChecklistItemForm'
import { DemoPage } from '../components/DemoPage'
import { makeDemoPage } from '../layout/makeDemoPage'

interface Task {
  name: string
  isComplete: boolean
}

const defaultTasks: Task[] = [
  { name: 'Go to the gym', isComplete: false },
  { name: 'Buy groceries', isComplete: false },
  { name: 'Walk the dog', isComplete: false },
]

export default makeDemoPage(() => {
  const [tasks, setTasks] = useState(defaultTasks)

  return (
    <DemoPage youtubeVideoId="kQERG9bauxY" title="Checklist">
      <VStack gap={16}>
        {tasks.map(({ name, isComplete }, index) => (
          <ChecklistItem
            key={index}
            value={isComplete}
            onChange={(value) => {
              setTasks(
                updateAtIndex(tasks, index, (task) => ({
                  ...task,
                  isComplete: value,
                })),
              )
            }}
            name={name}
          />
        ))}
        <Opener
          renderOpener={({ isOpen, onOpen }) =>
            isOpen ? null : (
              <AddChecklistItemPrompt onClick={onOpen}>
                Add task
              </AddChecklistItemPrompt>
            )
          }
          renderContent={({ onClose }) => (
            <ChecklistItemForm
              namePlaceholder="Enter task name"
              onSubmit={({ name }) => {
                setTasks([...tasks, { name, isComplete: false }])
                onClose()
              }}
              onCancel={onClose}
            />
          )}
        />
      </VStack>
    </DemoPage>
  )
})
