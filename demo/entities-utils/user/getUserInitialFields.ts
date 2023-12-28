import { User } from '@demo/entities/User'
import { makeId } from '@lib/dynamodb/makeId'

export const getUserInitialFields = ({
  email,
  name,
  country,
}: Pick<User, 'email' | 'name' | 'country'>): Omit<User, 'updatedAt'> => {
  return {
    id: makeId(),
    createdAt: Date.now(),
    email,
    name,
    country,
  }
}
