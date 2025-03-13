import { SESEventRecord } from 'aws-lambda'

import { formatEmail } from './formatEmail'
import { forwardEmail } from './forwardEmail'
import { getEmailFromStorage } from './getEmailFromStorage'
import { getEnvVar } from './getEnvVar'

export const processSesEventRecord = async (record: SESEventRecord) => {
  console.log('Processing SES event record', { record })

  const {
    mail,
    receipt: { recipients },
  } = record.ses
  const message = await getEmailFromStorage(mail.messageId)
  if (recipients.length > 1) {
    throw new Error('Multiple recipients are not supported')
  }

  const [recipient] = recipients

  const formattedEmail = formatEmail({
    message,
    recipient,
    forwardTo: getEnvVar('FORWARD_TO'),
  })

  return forwardEmail({
    forwardTo: getEnvVar('FORWARD_TO'),
    message: formattedEmail,
    sendFrom: recipient,
  })
}
