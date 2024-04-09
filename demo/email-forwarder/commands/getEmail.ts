import { getEmailFromStorage } from '../getEmailFromStorage'

const getEmail = async () => {
  const email = await getEmailFromStorage(
    '79jhkdfsm4d60fvb2cq77tdr1blli5r2h5csnt81',
  )
  console.log(email)
}

getEmail()
