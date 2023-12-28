import { v4 as uuidv4 } from 'uuid'

export const makeId = () => 'a' + uuidv4().split('-').join('')
