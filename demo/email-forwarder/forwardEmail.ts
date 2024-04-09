import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'

type ForwardEmailInput = {
  forwardTo: string
  message: string
  sendFrom: string
}

export const forwardEmail = ({
  forwardTo,
  message,
  sendFrom,
}: ForwardEmailInput) => {
  const client = new SESv2Client({})

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [forwardTo],
    },
    Content: {
      Raw: {
        Data: new TextEncoder().encode(message),
      },
    },
    FromEmailAddress: sendFrom,
  })

  return client.send(command)
}
