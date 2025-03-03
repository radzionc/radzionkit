import { VStack } from '@lib/ui/css/stack'

import { NavigationToInternalPage } from './NavigationToInternalPage'
import { Path } from './Path'

export const NavigationItems = () => (
  <VStack fullWidth>
    <NavigationToInternalPage path={Path.Stacks} name="Stacks" />
    <NavigationToInternalPage path={Path.Text} name="Text" />
    <NavigationToInternalPage path={Path.Button} name="Button" />
    <NavigationToInternalPage path={Path.IconButton} name="Icon Button" />

    <NavigationToInternalPage path={Path.Panel} name="Panel" />
    <NavigationToInternalPage path={Path.Modal} name="Modal" />
    <NavigationToInternalPage path={Path.TextInput} name="Text Input" />
    <NavigationToInternalPage path={Path.HSLA} name="HSLA" />
    <NavigationToInternalPage path={Path.Colors} name="Colors" />
    <NavigationToInternalPage path={Path.Images} name="Images" />
    <NavigationToInternalPage path={Path.SizeAware} name="Size Aware" />
    <NavigationToInternalPage path={Path.Slider} name="Slider" />
    <NavigationToInternalPage path={Path.Switch} name="Switch" />
    <NavigationToInternalPage path={Path.Spinner} name="Spinner" />
    <NavigationToInternalPage path={Path.Checkbox} name="Checkbox" />
    <NavigationToInternalPage path={Path.Tag} name="Tag" />
    <NavigationToInternalPage path={Path.Combobox} name="Combobox" />
    <NavigationToInternalPage path={Path.CountryInput} name="Country Input" />
    <NavigationToInternalPage path={Path.BarChart} name="Bar Chart" />
    <NavigationToInternalPage path={Path.PieChart} name="Pie Chart" />
    <NavigationToInternalPage path={Path.LineChart} name="Line Chart" />
    <NavigationToInternalPage path={Path.Countdown} name="Countdown" />
    <NavigationToInternalPage path={Path.Hoverable} name="Hoverable" />
    <NavigationToInternalPage path={Path.CountryFlag} name="Country flag" />
    <NavigationToInternalPage path={Path.ImageBanner} name="Image Banner" />
    <NavigationToInternalPage path={Path.Checklist} name="Checklist" />
    <NavigationToInternalPage path={Path.GridTable} name="CSS Grid Table" />
    <NavigationToInternalPage path={Path.PressTracker} name="Press Tracker" />
    <NavigationToInternalPage path={Path.NestedFilter} name="Nested Filter" />
    <NavigationToInternalPage
      path={Path.SeparatedByLine}
      name="Separated By Line"
    />
    <NavigationToInternalPage
      path={Path.StackSeparatedBy}
      name="Stack Separated By"
    />
    <NavigationToInternalPage path={Path.Tooltip} name="Tooltip" />
    <NavigationToInternalPage path={Path.CopyText} name="Copy Text" />
    <NavigationToInternalPage
      path={Path.ConfirmationModal}
      name="Confirmation Modal"
    />
    <NavigationToInternalPage path={Path.DayInput} name="Day Input" />
    <NavigationToInternalPage
      path={Path.OnHoverAction}
      name="On Hover Action"
    />
    <NavigationToInternalPage
      path={Path.TimeoutMessage}
      name="Timeout Message"
    />
    <NavigationToInternalPage path={Path.ColorInput} name="Color Input" />
    <NavigationToInternalPage path={Path.EmojiInput} name="Emoji Input" />
    <NavigationToInternalPage path={Path.TabNavigation} name="Tab Navigation" />
    <NavigationToInternalPage path={Path.AmountInput} name="Amount Input" />
    <NavigationToInternalPage path={Path.ShowOnce} name="Show Once" />
    <NavigationToInternalPage path={Path.Menu} name="Menu" />
    <NavigationToInternalPage path={Path.DynamicForm} name="Dynamic Form" />
    <NavigationToInternalPage path={Path.TimeEditor} name="Time Editor" />
    <NavigationToInternalPage
      path={Path.CalendarEditor}
      name="Calendar Editor"
    />
    <NavigationToInternalPage
      path={Path.DistributionBar}
      name="Distribution Bar"
    />
    <NavigationToInternalPage
      path={Path.InfiniteScroll}
      name="Infinite Scroll"
    />
  </VStack>
)
