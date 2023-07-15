import { GitHubIcon } from "lib/ui/icons/GitHubIcon"
import { MailIcon } from "lib/ui/icons/MailIcon"
import { TelegramIcon } from "lib/ui/icons/TelegramIcon"
import { TwitterIcon } from "lib/ui/icons/TwitterIcon"
import { HStack } from "lib/ui/Stack"
import { ResumeFooterLink } from "./ResumeFooterLink"

const email = "radzionchachura@gmail.com"
const twitterHandle = "radzionchachura"
const githubHandle = "radzionc"
const telegramHandle = "radzionchachura"

export const ResumeFooter = () => (
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
)
