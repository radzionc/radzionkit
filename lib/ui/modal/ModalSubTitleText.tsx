import { ComponentProps } from 'react'
import { Text } from '../text'
import { AsElementComponent } from '../props'

export const ModalSubTitleText = (
  props: ComponentProps<typeof Text> & AsElementComponent,
) => <Text color="supporting" as="div" {...props} />
