import { ApiImplementation } from './ApiImplementation'
import { authSessionWithEmail } from '../auth/resolvers/authSessionWithEmail'
import { authSessionWithOAuth } from '../auth/resolvers/authSessionWithOAuth'
import { user } from '../users/resolvers/user'
import { updateUser } from '../users/resolvers/updateUser'
import { manageSubscription } from '../membership/subscription/resolvers/manageSubscription'
import { subscription } from '../membership/subscription/resolvers/subscription'
import { scoreboard } from '../scoreboard/resolvers/scoreboard'
import { sendAuthLinkByEmail } from '../auth/resolvers/sendAuthLinkByEmail'
import { createProject } from '../projects/resolvers/createProject'
import { updateProject } from '../projects/resolvers/updateProject'
import { deleteProject } from '../projects/resolvers/deleteProject'
import { redeemAppSumoCode } from '../membership/appSumo/resolvers/redeemAppSumoCode'
import { createHabit } from '../habits/resolvers/createHabit'
import { updateHabit } from '../habits/resolvers/updateHabit'
import { deleteHabit } from '../habits/resolvers/deleteHabit'
import { trackHabit } from '../habits/resolvers/trackHabit'
import { addSet } from '../sets/resolvers/addSet'
import { editLastSet } from '../sets/resolvers/editLastSet'
import { removeLastSet } from '../sets/resolvers/removeLastSet'

export const implementation: ApiImplementation = {
  authSessionWithEmail,
  authSessionWithOAuth,
  sendAuthLinkByEmail,
  user,
  updateUser,
  manageSubscription,
  subscription,
  scoreboard,
  createProject,
  updateProject,
  deleteProject,
  redeemAppSumoCode,
  createHabit,
  updateHabit,
  deleteHabit,
  trackHabit,
  addSet,
  editLastSet,
  removeLastSet,
}
