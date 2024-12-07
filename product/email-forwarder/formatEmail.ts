import { ErrorWithContext } from '@lib/utils/errors/ErrorWithContext'

type FormatEmailInput = {
  message: string
  recipient: string
  forwardTo: string
}

export const formatEmail = ({
  message,
  recipient,
  forwardTo,
}: FormatEmailInput): string => {
  const parsedMessage = message.match(/^((?:.+\r?\n)*)(\r?\n(?:.*\s+)*)/m)
  if (!parsedMessage) {
    throw new ErrorWithContext('Failed to parse email', {
      message,
    })
  }
  let header = parsedMessage[1]
  const body = parsedMessage[2]

  // Add "Reply-To:" with the "From" address if it doesn't already exists
  if (!/^reply-to:[\t ]?/im.test(header)) {
    const [, from] =
      header.match(/^from:[\t ]?(.*(?:\r?\n\s+.*)*\r?\n)/im) || []
    if (from) {
      header = `${header}Reply-To: ${from}`
    }
  }

  // SES does not allow sending messages from an unverified address,
  // so replace the message's "From:" header with the original
  // recipient (which is a verified domain)
  header = header.replace(
    /^from:[\t ]?(.*(?:\r?\n\s+.*)*)/gim,
    (_, from) =>
      `From: ${from.replace('<', 'at ').replace('>', '')} <${recipient}>`,
  )

  // Replace original 'To' header with a manually defined one
  header = header.replace(/^to:[\t ]?(.*)/gim, () => `To: ${forwardTo}`)

  // Remove the Return-Path header.
  header = header.replace(/^return-path:[\t ]?(.*)\r?\n/gim, '')

  // Remove Sender header.
  header = header.replace(/^sender:[\t ]?(.*)\r?\n/gim, '')

  // Remove Message-ID header.
  header = header.replace(/^message-id:[\t ]?(.*)\r?\n/gim, '')

  // Remove all DKIM-Signature headers to prevent triggering an
  // "InvalidParameterValue: Duplicate header 'DKIM-Signature'" error.
  // These signatures will likely be invalid anyways, since the From
  // header was modified.
  header = header.replace(/^dkim-signature:[\t ]?.*\r?\n(\s+.*\r?\n)*/gim, '')

  return `${header}${body}`
}
