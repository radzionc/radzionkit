import styled from 'styled-components'
import { Text } from '../../text'
import { Button } from '../../buttons/Button'
import { IconButton } from '../../buttons/IconButton'
import { TrashIcon } from '../../icons/TrashIcon'
import { InputContainer } from '../../inputs/InputContainer'
import { LabelText } from '../../inputs/LabelText'
import { textInputHeight } from '../../css/textInput'
import { SeparatedByLine } from '../../layout/SeparatedByLine'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { toSizeUnit } from '../../css/toSizeUnit'

interface FieldArrayFrameProps<T> {
  error?: string
  onAppend: () => void
  onRemove: (index: number) => void
  fields: T[]
  renderField: (field: T, index: number) => React.ReactNode
  entityName: string
}

const Content = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 100px 1fr;
  align-items: start;
`

const DeleteButton = styled(IconButton)`
  height: ${toSizeUnit(textInputHeight)};
  width: 100%;
`

export function FieldArrayFrame<T>({
  onAppend,
  onRemove,
  error,
  fields,
  renderField,
  entityName,
}: FieldArrayFrameProps<T>) {
  return (
    <SeparatedByLine gap={16}>
      {fields.map((field, index) => {
        return (
          <Content key={index}>
            <InputContainer as="div">
              <LabelText>
                {capitalizeFirstLetter(entityName)} #{index + 1}
              </LabelText>
              <DeleteButton
                title="Delete"
                kind="alert"
                onClick={() => onRemove(index)}
                icon={<TrashIcon />}
              />
            </InputContainer>
            {renderField(field, index)}
          </Content>
        )
      })}
      <Content>
        <Button
          style={{ alignSelf: 'start' }}
          kind="secondary"
          onClick={onAppend}
        >
          Add {entityName}
        </Button>
        {error && (
          <Text style={{ alignSelf: 'center' }} size={14} color="alert">
            {error}
          </Text>
        )}
      </Content>
    </SeparatedByLine>
  )
}
