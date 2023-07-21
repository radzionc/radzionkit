import { Form } from "@reactkit/ui/ui/Form/Form"
import { TextInput } from "@reactkit/ui/ui/inputs/TextInput"
import { TextArea } from "@reactkit/ui/ui/inputs/TextArea"
import { FormSection } from "@reactkit/ui/ui/Form/FormSection"
import { bioMaxLength, useJobApplicationForm } from "./jobApplicationForm"
import { ExperienceSection } from "./ExperienceSection"
import { Panel } from "@reactkit/ui/ui/Panel/Panel"
import { TitledSection } from "@reactkit/ui/ui/Layout/TitledSection"
import { Button } from "@reactkit/ui/ui/buttons/Button"

export const JobApplication = () => {
  const form = useJobApplicationForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form

  return (
    <Panel width={480}>
      <TitledSection title="Job Application">
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
          actions={<Button size="l">Submit</Button>}
        />
      </TitledSection>
    </Panel>
  )
}
