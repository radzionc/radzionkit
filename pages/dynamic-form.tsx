import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { JobApplication } from "components/JobApplication";

const DynamicFormPage: NextPage = () => {
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Dynamic Form</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/dynamic-form.tsx" />
        </HStack>
      }
    >
      <JobApplication />
    </RegularPage>
  );
};

export default DynamicFormPage;
