import type { NextPage } from "next";
import { SubmitFormButton } from "lib/ui/buttons/rect/SubmitFormButton";
import { Form } from "lib/ui/Form/Form";
import { TextInput } from "lib/ui/inputs/TextInput";
import { useForm } from "react-hook-form";
import { TextArea } from "lib/ui/inputs/TextArea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DemoPage } from "components/DemoPage";
import { Panel } from "lib/ui/Panel/Panel";
import { TitledSection } from "lib/ui/Layout/TitledSection";

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
    <DemoPage youtubeVideoId="V3scoHuQ19s" title="Text Input">
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
        </TitledSection>
      </Panel>
    </DemoPage>
  );
};

export default TextInputPage;
