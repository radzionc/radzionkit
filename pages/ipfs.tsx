import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { RegularPage } from "ui/page/RegularPage";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";
import { TitledCard } from "ui/Card/TitledCard";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "ui/Form/Form";
import { Controller, useForm } from "react-hook-form";
import { SubmitFormButton } from "ui/buttons/rect/SubmitFormButton";
import { TextInput } from "ui/inputs/TextInput";
import { Web3StorageProvider } from "web3/components/Web3StorageProvider";
import { PdfFileInput } from "web3/components/PdfFileInput";

interface FormShape {
  name: string;
  fileUri: string;
}

const schema = yup
  .object()
  .shape({
    name: yup.string().max(100).required(),
    fileUri: yup.string().required(),
  })
  .required();

const IPFSPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormShape>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Upload to IPFS</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/ipfs.tsx" />
        </HStack>
      }
    >
      <Web3StorageProvider>
        <TitledCard title="Your paper" width={400}>
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
            actions={<SubmitFormButton text="Submit" />}
          />
        </TitledCard>
      </Web3StorageProvider>
    </RegularPage>
  );
};

export default IPFSPage;
