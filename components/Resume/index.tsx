import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { useRef } from "react";
import { ResumeContainer } from "./ResumeContainer";
import { PrintResume } from "./PrintResume";
import { dotSeparator, SeparatedBy } from "lib/ui/SeparatedBy";
import { ExperienceList } from "./ExperienceList";
import { JobExperience } from "./JobExperience";

export const Resume = () => {
  const containerElement = useRef<HTMLDivElement>(null);
  return (
    <ResumeContainer ref={containerElement}>
      <HStack fullWidth justifyContent="space-between">
        <VStack gap={8}>
          <HStack alignItems="center" gap={8}>
            <Text weight="bold" color="supporting">
              Radzion Chachura
            </Text>
            <SeparatedBy separator={dotSeparator}>
              <Text>6 years dev experience</Text>
              <Text>CS degree</Text>
              <Text>Creator</Text>
            </SeparatedBy>
          </HStack>
          <HStack alignItems="center" gap={8}>
            <Text color="supporting">Primary skills:</Text>
            <Text>
              React, TypeScript, UX/UI, Product, Teamwork{" "}
              <Text as="span" size={14} color="supporting">
                + AWS, NodeJS, DynamoDB
              </Text>
            </Text>
          </HStack>
        </VStack>
        <PrintResume renderContent={() => containerElement.current} />
      </HStack>
      <ExperienceList>
        <VStack gap={20}>
          <Text weight="bold">
            <Text as="span" color="attention">
              Web3
            </Text>{" "}
            <Text as="span" color="supporting">
              with
            </Text>{" "}
            React & TypeScript
          </Text>
          <JobExperience
            position="Front-end Engineer"
            company="Terraform Labs"
            responsibilities={[
              "Building new features for the Anchor protocol",
              "Responsible for the front end of two protocols for decentralized story creation with Twitter and NFTs",
              "Building front-end for no-code DAO management platform",
            ]}
            startedAt={new Date(2022, 3)}
          />
        </VStack>
        <VStack gap={20}>
          <JobExperience
            position="Front-end Engineer"
            company="IOG"
            finishedAt={new Date(2022, 2)}
            startedAt={new Date(2021, 9)}
            responsibilities={[
              "Developing a new Cardano light wallet browser extension",
            ]}
          />
          <JobExperience
            position="Front-end Engineer"
            company="Zerion"
            finishedAt={new Date(2021, 8)}
            startedAt={new Date(2020, 10)}
            responsibilities={[
              "Implementing interfaces for wallets management",
              "Improving UX of the trading experience",
              "Adding internalization to the web app",
            ]}
          />
        </VStack>
      </ExperienceList>
      <ExperienceList>
        <JobExperience
          position="Senior Software Developer"
          company="Kontist"
          startedAt={new Date(2019, 7)}
          finishedAt={new Date(2020, 9)}
          responsibilities={[
            "Technical planning & code reviews",
            "Adding features to the native app",
            "Developing new web app",
            "Improving sign up conversion",
          ]}
          technologies={["React Native", "React", "NodeJS", "PostgreSQL"]}
        />
        <JobExperience
          position="Software Developer"
          company="KREO"
          startedAt={new Date(2017, 4)}
          finishedAt={new Date(2019, 6)}
          responsibilities={[
            "Implementing complex interfaces",
            "Frontend architecture",
            "Managing infrastructure",
            "Developing microservices",
          ]}
          technologies={[
            "React",
            "Redux",
            "Terraform",
            "AWS",
            "NodeJS",
            "DynamoDB",
          ]}
        />
      </ExperienceList>
    </ResumeContainer>
  );
};
