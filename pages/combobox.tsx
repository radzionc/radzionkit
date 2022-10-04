import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { SubmitFormButton } from "lib/ui/buttons/rect/SubmitFormButton";
import { TitledCard } from "lib/ui/Card/TitledCard";
import { Form } from "lib/ui/Form/Form";
import { TextInput } from "lib/ui/inputs/TextInput";
import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LanguagesInput } from "components/LanguagesInput";

interface FormShape {
  name: string;
  languages: string[];
}

const schema: yup.SchemaOf<FormShape> = yup
  .object({
    name: yup.string().max(100).required(),
    languages: yup.array().min(1),
  })
  .required();

const ComboboxPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormShape>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      languages: [],
    },
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
              <Controller
                control={control}
                name="languages"
                render={({ field: { value, onChange, ref } }) => (
                  <LanguagesInput
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    error={errors.languages?.message}
                  />
                )}
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

export default ComboboxPage;
