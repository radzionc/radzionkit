import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'
import { getEnvVar } from './getEnvVar'

interface SendEmailParameters {
  email: string
  body: string
  subject: string
  source: string
}

const client = new SESv2Client({ region: getEnvVar('SES_AWS_REGION') })

export const sendEmail = ({
  email,
  body,
  subject,
  source,
}: SendEmailParameters) => {
  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [email],
    },
    Content: {
      Simple: {
        Body: {
          Html: {
            Data: body,
          },
        },
        Subject: {
          Data: subject,
        },
      },
    },
    FromEmailAddress: source,
  })

  return client.send(command)
}
