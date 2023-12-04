import { v4 as uuidv4 } from 'uuid'

export const getId = () => 'a' + uuidv4().split('-').join('')
