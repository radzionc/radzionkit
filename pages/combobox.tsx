import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { SubmitFormButton } from "lib/ui/buttons/rect/SubmitFormButton";
import { Form } from "lib/ui/Form/Form";
import { TextInput } from "lib/ui/inputs/TextInput";
import { RegularPage } from "lib/ui/page/RegularPage";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LanguagesInput } from "components/LanguagesInput";
import { DemoPage } from "components/DemoPage";
import { Panel } from "lib/ui/Panel/Panel";
import { TitledSection } from "lib/ui/Layout/TitledSection";

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
    <DemoPage title="Combobox" youtubeVideoId="iZGQE3-pqpg">
      <Panel width={400}>
        <TitledSection title="Who are You?">
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
        </TitledSection>
      </Panel>
    </DemoPage>
  );
};

export default ComboboxPage;
