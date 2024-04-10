import { HStack, VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import { Tag } from '@lib/ui/tags/Tag'
import { useTheme } from 'styled-components'
import { useRef } from 'react'
import { UniformColumnGrid } from '@lib/ui/layout/UniformColumnGrid'
import { ResumeContainer } from '@lib/resume-ui/components/ResumeContainer'
import { JobExperience } from '@lib/resume-ui/components/JobExperience'
import { DownloadResume } from '@lib/resume-ui/components/DownloadResume'
import { ResumeSection } from '@lib/resume-ui/components/ResumeSection'
import { TflIcon } from './TflIcon'
import { formatDistance } from 'date-fns'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { ShyTextButton } from '@lib/ui/buttons/ShyTextButton'
import { IogIcon } from './IogIcon'
import { ZerionIcon } from './ZerionIcon'
import { GitHubIcon } from '@lib/ui/icons/GitHubIcon'
import { MailIcon } from '@lib/ui/icons/MailIcon'
import { TelegramIcon } from '@lib/ui/icons/TelegramIcon'
import { TwitterIcon } from '@lib/ui/icons/TwitterIcon'
import { ResumeFooterLink } from '@lib/resume-ui/components/ResumeFooterLink'
import { PersonalProject } from '@lib/resume-ui/components/PersonalProject'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { StarIcon } from '@lib/ui/icons/StarIcon'

const firstJobStartedAt = new Date(2017, 5)

const email = 'radzion@radzion.com'
const twitterHandle = 'radzionc'
const githubHandle = 'radzionc'
const telegramHandle = 'radzionc'

export const RadzionResume = () => {
  const { colors } = useTheme()
  const containerElement = useRef<HTMLDivElement>(null)

  return (
    <ResumeContainer ref={containerElement}>
      <HStack alignItems="start" justifyContent="space-between">
        <VStack gap={8}>
          <HStack alignItems="center" gap={8}>
            <Text size={20} color="contrast" weight="bold">
              Radzion
            </Text>
            <Tag $color={colors.getLabelColor(5)}>
              {formatDistance(Date.now(), firstJobStartedAt)} of experience
            </Tag>
            <Tag $color={colors.getLabelColor(10)}>CS Degree</Tag>
          </HStack>
          <HStack>
            <Text color="contrast" weight="semibold">
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
            startedAt={new Date(2022, 3)}
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
              finishedAt={new Date(2022, 2)}
              startedAt={new Date(2021, 9)}
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
              finishedAt={new Date(2021, 8)}
              startedAt={new Date(2020, 10)}
              companyIcon={<ZerionIcon />}
              responsibilities={[
                'Implementing interfaces for wallets management',
                <>Improving UX of the trading experience at</>,
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
            startedAt={new Date(2019, 7)}
            finishedAt={new Date(2020, 9)}
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
        </UniformColumnGrid>
      </ResumeSection>
      <ResumeSection style={{ flex: 1 }} title={'Making Content & Tools'}>
        <UniformColumnGrid maxColumns={2} gap={40}>
          <PersonalProject
            name="Increaser"
            url="https://increaser.org"
            description="A productivity toolkit for remote workers"
            achievement="$3K total revenue"
            responsibilities={[
              'Full-stack development within a TypeScript monorepo',
              'Designing a B2C SaaS product',
            ]}
          />
          <VStack gap={20}>
            <PersonalProject
              name="Radzion Kit"
              url="https://github.com/radzionc/radzionkit"
              description="Speedy Setup for Robust Full-Stack Monorepo Projects"
              achievement={
                <HStack alignItems="center" gap={8}>
                  <Text>100+</Text>
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
              achievement="1k+ subscribers"
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
          icon={<TwitterIcon />}
          name={twitterHandle}
          url={`https://twitter.com/${twitterHandle}`}
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
