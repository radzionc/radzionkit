import { render } from '@react-email/render'
import { sendEmail } from './sendEmail'
import { productName } from '@radzionkit/entities'
import { getEnvVar } from './getEnvVar'
import LoginLinkEmail, { LoginLinkEmailProps } from '../emails/LoginLinkEmail'

export const sendLoginLinkEmail = async ({
  loginUrl,
  email,
}: LoginLinkEmailProps) => {
  const body = render(<LoginLinkEmail loginUrl={loginUrl} email={email} />, {
    pretty: true,
  })

  return sendEmail({
    email,
    body,
    subject: `Log in to ${productName}`,
    source: `Log in <noreply@${getEnvVar('EMAIL_DOMAIN')}>`,
  })
}
