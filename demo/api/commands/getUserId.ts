import { getUserByEmail } from '@demo/db/user'

const command = async (email: string) => {
  const user = await getUserByEmail(email, ['id'])
  if (user) {
    console.log(user.id)
  }
}

const id = process.argv[2]
command(id)
