import { getAuthSession } from '../auth/utils/getAuthSession'

const command = async (id: string) => {
  const session = await getAuthSession(id)
  console.log(
    `localStorage.setItem('auth-session', '${JSON.stringify(session)}')`,
  )
}

const id = process.argv[2]
if (!id) {
  throw new Error('No user id provided')
}
command(id)
