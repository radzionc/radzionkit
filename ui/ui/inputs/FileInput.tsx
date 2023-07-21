import styled from "styled-components"
import { inputBackgroundCSS, inputBorderRadiusCSS } from "./config"
import { useDropzone, Accept } from "react-dropzone"
import { VStack } from "ui/Stack"
import { Text } from "ui/Text"
import { defaultTransitionCSS } from "ui/animations/transitions"
import { UploadIcon } from "ui/icons/UploadIcon"
import { Panel } from "../Panel/Panel"
import { Button } from "../buttons/Button"
import { getColor } from "../theme/getters"

interface Props {
  onSubmit: (file: File) => void
  accept: Accept
  isLoading?: boolean
}

const Container = styled(Panel)`
  flex: 1;
  padding: 32px;
  ${inputBorderRadiusCSS};
  ${inputBackgroundCSS};
  cursor: pointer;

  ${defaultTransitionCSS};

  :hover {
    background: ${getColor("mistExtra")};
  }
`

export const FileInput = ({ onSubmit, accept, isLoading }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept,
    onDrop: (files) => {
      onSubmit(files[0])
    },
  })

  const acceptedExtensions = Object.values(accept).flat()

  return (
    <Container {...getRootProps()}>
      <VStack gap={16} alignItems="center">
        <Text size={34} color="supporting">
          <UploadIcon />
        </Text>
        <Text color="supporting">
          Drag and drop a{" "}
          {acceptedExtensions
            .map((extension) => extension.toUpperCase())
            .join("/")}{" "}
          file here or
        </Text>
        <Button isLoading={isLoading} as="div">
          Click to upload
        </Button>
      </VStack>
      <input {...getInputProps()} />
    </Container>
  )
}
