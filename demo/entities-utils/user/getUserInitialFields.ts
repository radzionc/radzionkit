import { getId } from '@demo/entities-utils/shared/getId'
import { User } from '@demo/entities/User'

export const getUserInitialFields = ({
  email,
  name,
  country,
}: Pick<User, 'email' | 'name' | 'country'>): Omit<User, 'updatedAt'> => {
  return {
    id: getId(),
    createdAt: Date.now(),
    email,
    name,
    country,
  }
}
