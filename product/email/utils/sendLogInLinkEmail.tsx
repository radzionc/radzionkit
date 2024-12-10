import { render } from '@react-email/render'
import { sendEmail } from './sendEmail'
import { getEnvVar } from './getEnvVar'
import LoginLinkEmail, { LoginLinkEmailProps } from '../emails/LoginLinkEmail'
import { productName } from '@product/config'

export const sendLoginLinkEmail = async ({
  loginUrl,
  email,
}: LoginLinkEmailProps) => {
  const body = await render(
    <LoginLinkEmail loginUrl={loginUrl} email={email} />,
    {
      pretty: true,
    },
  )

  return sendEmail({
    email,
    body,
    subject: `Log in to ${productName}`,
    source: `Log in <noreply@${getEnvVar('EMAIL_DOMAIN')}>`,
  })
}
