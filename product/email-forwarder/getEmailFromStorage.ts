import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'

import { getEnvVar } from './getEnvVar'

export const getEmailFromStorage = async (messageId: string) => {
  const s3 = new S3Client({})

  const command = new GetObjectCommand({
    Bucket: getEnvVar('EMAILS_BUCKET'),
    Key: messageId,
  })

  const { Body } = await s3.send(command)

  if (!Body) {
    throw new Error(`Email ${messageId} not found`)
  }

  return Body.transformToString()
}
