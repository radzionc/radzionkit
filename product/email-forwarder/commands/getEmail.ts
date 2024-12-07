import { getEmailFromStorage } from '../getEmailFromStorage'

const getEmail = async (id: string) => {
  const email = await getEmailFromStorage(id)
  console.log(email)
}

const id = process.argv[2]
getEmail(id)
