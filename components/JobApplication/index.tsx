import { SubmitFormButton } from "ui/buttons/rect/SubmitFormButton";
import { TitledCard } from "ui/Card/TitledCard";
import { Form } from "ui/Form/Form";
import { TextInput } from "ui/inputs/TextInput";
import { TextArea } from "ui/inputs/TextArea";
import { FormSection } from "ui/Form/FormSection";
import { bioMaxLength, useJobApplicationForm } from "./jobApplicationForm";
import { ExperienceSection } from "./ExperienceSection";

export const JobApplication = () => {
  const form = useJobApplicationForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  return (
    <TitledCard width={480} title="Job Application">
      <Form
        gap={48}
        content={
          <>
            <FormSection name="General info">
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
            </FormSection>
            <ExperienceSection form={form} />
          </>
        }
        onSubmit={handleSubmit(console.log)}
        actions={<SubmitFormButton text="Submit" />}
      />
    </TitledCard>
  );
};
