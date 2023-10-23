import { HStack, VStack } from '@reactkit/ui/ui/Stack'
import { Text } from '@reactkit/ui/ui/Text'
import { useRef } from 'react'
import { ResumeContainer } from './ResumeContainer'
import { PrintResume } from './PrintResume'
import {
  StackSeparatedBy,
  dotSeparator,
} from '@reactkit/ui/ui/StackSeparatedBy'
import { ExperienceList } from './ExperienceList'
import { JobExperience } from './JobExperience'
import { PersonalProject } from './PersonalProject'
import { ResumeFooter } from './ResumeFooter'

export const Resume = () => {
  const containerElement = useRef<HTMLDivElement>(null)
  return (
    <ResumeContainer ref={containerElement}>
      <HStack fullWidth justifyContent="space-between">
        <VStack gap={8}>
          <HStack alignItems="center" gap={8}>
            <Text weight="bold" color="supporting">
              Radzion
            </Text>
            <StackSeparatedBy
              alignItems="center"
              direction="row"
              gap={8}
              separator={<Text color="supporting">{dotSeparator}</Text>}
            >
              <Text>6 years dev experience</Text>
              <Text>CS degree</Text>
              <Text>Creator</Text>
            </StackSeparatedBy>
          </HStack>
          <HStack alignItems="center" gap={8}>
            <Text color="supporting">Primary skills:</Text>
            <Text>
              React, TypeScript, UX/UI, Product, Teamwork{' '}
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
            <Text as="span" color="primary">
              Web3
            </Text>{' '}
            <Text as="span" color="supporting">
              with
            </Text>{' '}
            React & TypeScript
          </Text>
          <JobExperience
            position="Front-end Engineer"
            company="Terraform Labs"
            responsibilities={[
              'Building new features for the Anchor protocol',
              'Responsible for the front end of two protocols for decentralized story creation with Twitter and NFTs',
              'Building front-end for no-code DAO management platform',
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
              'Developing a new Cardano light wallet browser extension',
            ]}
          />
          <JobExperience
            position="Front-end Engineer"
            company="Zerion"
            finishedAt={new Date(2021, 8)}
            startedAt={new Date(2020, 10)}
            responsibilities={[
              'Implementing interfaces for wallets management',
              'Improving UX of the trading experience',
              'Adding internalization to the web app',
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
            'Technical planning & code reviews',
            'Adding features to the native app',
            'Developing new web app',
            'Improving sign up conversion',
          ]}
          technologies={['React Native', 'React', 'NodeJS', 'PostgreSQL']}
        />
        <JobExperience
          position="Software Developer"
          company="KREO"
          startedAt={new Date(2017, 4)}
          finishedAt={new Date(2019, 6)}
          responsibilities={[
            'Implementing complex interfaces',
            'Frontend architecture',
            'Managing infrastructure',
            'Developing microservices',
          ]}
          technologies={[
            'React',
            'Redux',
            'Terraform',
            'AWS',
            'NodeJS',
            'DynamoDB',
          ]}
        />
      </ExperienceList>
      <ExperienceList style={{ flex: 1 }}>
        <VStack gap={20}>
          <Text weight="bold">
            <Text as="span" color="primary">
              Making
            </Text>{' '}
            Tools & Content
          </Text>
          <PersonalProject
            description="Productivity toolkit for remote workers"
            name="Increaser"
            url="https://increaser.org"
            achievement="12k+ signups"
            responsibilities={[
              'Bring to life a B2C SAAS product',
              'Full-stack development of a web app',
            ]}
          />
          <PersonalProject
            description="Blog on programming and more"
            name="radzion.com"
            url="https://radzion.com"
            achievement="4k+ visits / mo"
          />
        </VStack>
        <VStack gap={20}>
          <PersonalProject
            description="Useful videos for web developers"
            name="YouTube"
            url="https://radzion.com"
            achievement="450+ subscribers"
          />
          <PersonalProject
            description="Highligts from nonfiction books"
            name="Books Concepts"
            url="https://booksconcepts.com"
            achievement="4k+ visits / mo"
          />
          <PersonalProject
            description="Toolkit for faster front-end development"
            name="React Kit"
            achievement="12 stars"
            url="https://reactkit.radzion.com"
          />
        </VStack>
      </ExperienceList>
      <ResumeFooter />
    </ResumeContainer>
  )
}
