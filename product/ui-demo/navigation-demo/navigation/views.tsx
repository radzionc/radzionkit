import { Views } from '@lib/navigation/Views'

import { HomeView } from '../HomeView'
import { ResultView } from '../ResultView'
import { SettingsView } from '../SettingsView'

import { AppViewId } from './AppView'

export const views: Views<AppViewId> = {
  home: HomeView,
  settings: SettingsView,
  result: ResultView,
}
