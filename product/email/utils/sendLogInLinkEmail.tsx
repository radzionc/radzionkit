import { productName } from '@product/config'
import { render } from '@react-email/render'
import * as React from 'react'

import LoginLinkEmail, { LoginLinkEmailProps } from '../emails/LoginLinkEmail'

import { getEnvVar } from './getEnvVar'
import { sendEmail } from './sendEmail'

export const sendLoginLinkEmail = async ({
  loginUrl,
  email,
}: LoginLinkEmailProps) => {
  const body = await render(
    <LoginLinkEmail loginUrl={loginUrl} email={email} />,
  )

  return sendEmail({
    email,
    body,
    subject: `Log in to ${productName}`,
    source: `Log in <noreply@${getEnvVar('EMAIL_DOMAIN')}>`,
  })
}
