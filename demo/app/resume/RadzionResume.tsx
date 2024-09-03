import { HStack, VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { Tag } from '@lib/ui/tags/Tag'
import { useTheme } from 'styled-components'
import { useRef } from 'react'
import { ResumeContainer } from '@lib/resume-ui/components/ResumeContainer'
import { JobExperience } from '@lib/resume-ui/components/JobExperience'
import { DownloadResume } from '@lib/resume-ui/components/DownloadResume'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { TflIcon } from './TflIcon'
import { differenceInYears } from 'date-fns'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { ShyTextButton } from '@lib/ui/buttons/ShyTextButton'
import { IogIcon } from './IogIcon'
import { ZerionIcon } from './ZerionIcon'
import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { MailIcon } from '@lib/ui/icons/MailIcon'
import { XIcon } from '@lib/ui/icons/XIcon'
import { ResumeFooterLink } from '@lib/resume-ui/components/ResumeFooterLink'
import { PersonalProject } from '@lib/resume-ui/components/PersonalProject'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { StarIcon } from '@lib/ui/icons/StarIcon'
import { useRhythmicRerender } from '@lib/ui/hooks/useRhythmicRerender'
import { convertDuration } from '@lib/utils/time/convertDuration'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'
import { TelegramIcon } from '@lib/ui/icons/TelegramIcon'
import { LinkedinIcon } from '@lib/ui/icons/LinkedinIcon'

const firstJobStartedAt = new Date(2017, 3)

const email = 'radzion@radzion.com'
const xHandle = 'radzionc'
const githubHandle = 'radzionc'
const telegramHandle = 'radzionc'
const linkedInHandle = 'radzion'

export const RadzionResume = () => {
  const { colors } = useTheme()
  const containerElement = useRef<HTMLDivElement>(null)

  const now = useRhythmicRerender(convertDuration(10, 'min', 'ms'))

  return (
    <ResumeContainer ref={containerElement}>
      <HStack alignItems="start" justifyContent="space-between">
        <VStack gap={8}>
          <HStack alignItems="center" gap={8}>
            <Text size={20} color="contrast" weight="600">
              Radzion
            </Text>
            <Tag $color={colors.getLabelColor(5)}>
              {differenceInYears(now, firstJobStartedAt)} years of experience
            </Tag>
            <Tag $color={colors.getLabelColor(10)}>CS Degree</Tag>
          </HStack>
          <HStack>
            <Text color="contrast" weight="500">
              💪 React, TypeScript, UX/UI, Web3{' '}
              <Text as="span" color="supporting">
                + AWS, NodeJS, DynamoDB
              </Text>
            </Text>
          </HStack>
        </VStack>
        <DownloadResume render={() => containerElement.current} />
      </HStack>
      <ResumeSection
        title={
          <>
            Web3{' '}
            <Text as="span" color="shy">
              with
            </Text>{' '}
            React & TypeScript
          </>
        }
      >
        <UniformColumnGrid maxColumns={2} gap={40}>
          <JobExperience
            position="Front-end Engineer"
            company="Terraform Labs"
            startedAt={new Date(2022, 2)}
            companyIcon={<TflIcon />}
            responsibilities={[
              <>
                Managed the end-to-end development of all front-end and
                server-side components within a monorepo for the{' '}
                <ExternalLink to="https://dao.enterprise.money/">
                  <ShyTextButton text="Enterprise" />
                </ExternalLink>{' '}
                DAO management protocol
              </>,
              'Making front-end for two experimental NFT protocols for decentralized story creation',
              'Building new features for the Anchor protocol',
            ]}
          />
          <VStack gap={20}>
            <JobExperience
              position="Front-end Engineer"
              company="IOG"
              finishedAt={new Date(2022, 1)}
              startedAt={new Date(2021, 8)}
              companyIcon={<IogIcon />}
              responsibilities={[
                <>
                  Developing front-end for a Cardano light wallet -{' '}
                  <ExternalLink to="https://www.lace.io/">
                    <ShyTextButton text="Lace" />
                  </ExternalLink>
                </>,
              ]}
            />
            <JobExperience
              position="Front-end Engineer"
              company="Zerion"
              finishedAt={new Date(2021, 7)}
              startedAt={new Date(2020, 9)}
              companyIcon={<ZerionIcon />}
              responsibilities={[
                'Implementing interfaces for wallets management',
                <>Improving UX of the trading experience</>,
                <>
                  Adding internalization to the{' '}
                  <ExternalLink to="https://app.zerion.io">
                    <ShyTextButton text="Zerion App" />
                  </ExternalLink>
                </>,
              ]}
            />
          </VStack>
        </UniformColumnGrid>
      </ResumeSection>
      <ResumeSection title={'Full-Stack Development'}>
        <UniformColumnGrid maxColumns={2} gap={40}>
          <JobExperience
            position="Senior Software Developer"
            company="Kontist"
            startedAt={new Date(2019, 6)}
            finishedAt={new Date(2020, 8)}
            responsibilities={[
              'Technical planning and code reviews',
              'Adding features to the native app',
              'Developing a new web app',
              'Improving sign up conversion',
            ]}
            technologies={['React Native', 'React', 'NodeJS', 'PostgreSQL']}
          />
          <JobExperience
            position="Software Developer"
            company="KREO"
            startedAt={firstJobStartedAt}
            finishedAt={new Date(2019, 5)}
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
        </UniformColumnGrid>
      </ResumeSection>
      <ResumeSection style={{ flex: 1 }} title={'Making Content & Tools'}>
        <UniformColumnGrid maxColumns={2} gap={40}>
          <PersonalProject
            name="Increaser"
            url="https://increaser.org"
            description="A productivity toolkit for remote workers"
            achievement="$67 MRR"
            responsibilities={[
              'Full-stack development within a TypeScript monorepo',
              'Designing a B2C SaaS product',
            ]}
          />
          <VStack gap={20}>
            <PersonalProject
              name="Radzion Kit"
              url="https://github.com/radzionc/radzionkit"
              description="Speedy setup for robust full-stack monorepo projects"
              achievement={
                <HStack alignItems="center" gap={8}>
                  <Text>166</Text>
                  <IconWrapper>
                    <StarIcon />
                  </IconWrapper>
                </HStack>
              }
            />
            <PersonalProject
              name="Radzion Dev"
              url="https://www.youtube.com/c/radzion"
              description="A YouTube channel about web development"
              achievement="1.5k subscribers"
            />
          </VStack>
        </UniformColumnGrid>
      </ResumeSection>
      <HStack alignItems="center" gap={40}>
        <ResumeFooterLink
          icon={<MailIcon />}
          name={email}
          url={`mailto:${email}`}
        />
        <ResumeFooterLink
          icon={<XIcon />}
          name={xHandle}
          url={`https://twitter.com/${xHandle}`}
        />
        <ResumeFooterLink
          icon={<LinkedinIcon />}
          name={linkedInHandle}
          url={`https://www.linkedin.com/in/${linkedInHandle}`}
        />
        <ResumeFooterLink
          icon={<GitHubIcon />}
          name={githubHandle}
          url={`https://github.com/${githubHandle}`}
        />
        <ResumeFooterLink
          icon={<TelegramIcon />}
          name={telegramHandle}
          url={`https://t.me/${telegramHandle}`}
        />
      </HStack>
    </ResumeContainer>
  )
}
