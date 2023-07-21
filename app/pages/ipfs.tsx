import type { NextPage } from "next"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Form } from "@reactkit/ui/ui/Form/Form"
import { Controller, useForm } from "react-hook-form"
import { TextInput } from "@reactkit/ui/ui/inputs/TextInput"
import { Web3StorageProvider } from "web3/components/Web3StorageProvider"
import { PdfFileInput } from "web3/components/PdfFileInput"
import { DemoPage } from "components/DemoPage"
import { Panel } from "@reactkit/ui/ui/Panel/Panel"
import { TitledSection } from "@reactkit/ui/ui/Layout/TitledSection"
import { Button } from "@reactkit/ui/ui/buttons/Button"

interface FormShape {
  name: string
  fileUri: string
}

const schema = yup
  .object()
  .shape({
    name: yup.string().max(100).required(),
    fileUri: yup.string().required(),
  })
  .required()

const IPFSPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormShape>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  })

  return (
    <DemoPage youtubeVideoId="z0YlnIxE4YA" title="Upload to IPFS">
      <Web3StorageProvider>
        <Panel width={400}>
          <TitledSection title="Your paper">
            <Form
              content={
                <>
                  <TextInput
                    label="Paper name"
                    {...register("name")}
                    error={errors.name?.message}
                    autoFocus
                    placeholder="Research into ..."
                  />
                  <Controller
                    name="fileUri"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <PdfFileInput
                        value={value}
                        onChange={onChange}
                        error={errors.fileUri?.message}
                      />
                    )}
                  />
                </>
              }
              onSubmit={handleSubmit(console.log)}
              actions={<Button size="l">Submit</Button>}
            />
          </TitledSection>
        </Panel>
      </Web3StorageProvider>
    </DemoPage>
  )
}

export default IPFSPage
