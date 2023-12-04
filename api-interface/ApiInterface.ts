import { OAuthProvider } from '@reactkit/entities/OAuthProvider'
import { AuthSession } from '@reactkit/entities/AuthSession'
import { Habit } from '@reactkit/entities/Habit'
import { UserPerformanceRecord } from '@reactkit/entities/PerformanceScoreboard'
import { Project } from '@reactkit/entities/Project'
import { Subscription } from '@reactkit/entities/Subscription'
import { Set, User } from '@reactkit/entities/User'
import { ApiMethod } from './ApiMethod'

export interface ApiInterface {
  authSessionWithEmail: ApiMethod<
    {
      code: string
      timeZone: number
    },
    AuthSession
  >

  authSessionWithOAuth: ApiMethod<
    {
      provider: OAuthProvider
      code: string
      redirectUri: string
      timeZone: number
    },
    AuthSession
  >

  user: ApiMethod<{ timeZone: number }, User>
  updateUser: ApiMethod<
    Partial<
      Pick<
        User,
        | 'name'
        | 'country'
        | 'primaryGoal'
        | 'focusSounds'
        | 'tasks'
        | 'weekTimeAllocation'
        | 'goalToStartWorkAt'
        | 'goalToFinishWorkBy'
        | 'goalToGoToBedAt'
        | 'isAnonymous'
        | 'sumbittedHabitsAt'
      >
    >,
    undefined
  >
  manageSubscription: ApiMethod<
    undefined,
    {
      updateUrl: string
      cancelUrl: string
    }
  >

  subscription: ApiMethod<{ id: string }, Subscription | undefined>

  scoreboard: ApiMethod<
    { id: string },
    {
      id: string
      syncedAt: number
      myPosition?: number
      users: Omit<UserPerformanceRecord, 'id'>[]
    }
  >

  sendAuthLinkByEmail: ApiMethod<{ email: string }, undefined>

  createProject: ApiMethod<
    Omit<Project, 'total' | 'status' | 'weeks' | 'months'>,
    Project
  >
  updateProject: ApiMethod<
    {
      id: string
      fields: Partial<
        Pick<
          Project,
          'name' | 'color' | 'status' | 'emoji' | 'allocatedMinutesPerWeek'
        >
      >
    },
    Project
  >
  deleteProject: ApiMethod<{ id: string }, undefined>

  redeemAppSumoCode: ApiMethod<{ code: string }, undefined>

  createHabit: ApiMethod<Omit<Habit, 'successes'>, Habit>
  updateHabit: ApiMethod<
    {
      id: string
      fields: Partial<
        Pick<
          Habit,
          'name' | 'color' | 'order' | 'emoji' | 'startedAt' | 'successes'
        >
      >
    },
    Habit
  >
  deleteHabit: ApiMethod<{ id: string }, undefined>
  trackHabit: ApiMethod<{ id: string; date: string; value: boolean }, undefined>
  addSet: ApiMethod<Set, undefined>
  editLastSet: ApiMethod<Set, undefined>
  removeLastSet: ApiMethod<undefined, undefined>
}

export type ApiMethodName = keyof ApiInterface
