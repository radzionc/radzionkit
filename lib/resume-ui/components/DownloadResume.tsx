import styled from 'styled-components'
import ReactToPrint from 'react-to-print'
import { DownloadIcon } from '@lib/ui/icons/DonwloadIcon'
import { Button } from '@lib/ui/buttons/Button'
import { HStack } from '@lib/ui/css/stack'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { Text } from '@lib/ui/text'

type DownloadResumeProps = {
  render: () => React.ReactInstance | null
}

const Container = styled(Button)`
  @media print {
    display: none;
  }
`

export const DownloadResume = ({ render }: DownloadResumeProps) => (
  <ReactToPrint
    trigger={() => (
      <Container size="s" kind="secondary">
        <HStack alignItems="center" gap={8}>
          <IconWrapper style={{ fontSize: 16 }}>
            <DownloadIcon />
          </IconWrapper>
          <Text>Download</Text>
        </HStack>
      </Container>
    )}
    content={render}
  />
)
