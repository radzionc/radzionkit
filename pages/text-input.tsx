import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { SubmitFormButton } from "lib/ui/buttons/rect/SubmitFormButton";
import { TitledCard } from "lib/ui/Card/TitledCard";
import { Form } from "lib/ui/Form/Form";
import { TextInput } from "lib/ui/inputs/TextInput";
import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { useForm } from "react-hook-form";
import { TextArea } from "lib/ui/inputs/TextArea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormShape {
  name: string;
  bio: string;
}

const bioMaxLength = 300;

const schema = yup
  .object()
  .shape({
    name: yup.string().max(100).required(),
    bio: yup.string().max(bioMaxLength).required(),
  })
  .required();

const TextInputPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormShape>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Text Input</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/text-input.tsx" />
        </HStack>
      }
    >
      <TitledCard width={400} title="Who are You?">
        <Form
          content={
            <>
              <TextInput
                label="Full name"
                {...register("name")}
                error={errors.name?.message}
                autoFocus
                placeholder="John Johnson"
              />
              <TextArea
                rows={4}
                maxLength={bioMaxLength}
                label="Bio"
                {...register("bio")}
                error={errors.bio?.message}
                placeholder="I'm a software engineer..."
              />
            </>
          }
          onSubmit={handleSubmit(console.log)}
          actions={<SubmitFormButton text="Submit" />}
        />
      </TitledCard>
    </RegularPage>
  );
};

export default TextInputPage;
