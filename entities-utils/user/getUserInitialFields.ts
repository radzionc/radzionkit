import { getId } from '@radzionkit/entities-utils/shared/getId'
import { User } from '@radzionkit/entities/User'

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
