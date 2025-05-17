import { ActiveView } from '@lib/navigation/ActiveView'
import { NavigationProvider } from '@lib/navigation/state'

import { Layout } from './Layout'
import { initialView } from './navigation/AppView'
import { views } from './navigation/views'

export const NavigationDemo = () => (
  <NavigationProvider initialValue={{ history: [initialView] }}>
    <Layout>
      <ActiveView views={views} />
    </Layout>
  </NavigationProvider>
)
