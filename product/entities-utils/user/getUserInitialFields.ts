import { makeId } from '@lib/dynamodb/makeId'
import { User } from '@product/entities/User'

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
