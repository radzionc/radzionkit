import { NavigationToInternalPage } from 'navigation/NavigationToInternalPage'
import { VStack } from 'lib/ui/Stack'
import { Path } from 'navigation/Path'

export const NavigationItems = () => (
  <VStack fullWidth>
    <NavigationToInternalPage path={Path.Stacks} name="Stacks" />
    <NavigationToInternalPage path={Path.Button} name="Button" />
    <NavigationToInternalPage path={Path.Panel} name="Panel" />
    <NavigationToInternalPage path={Path.Modal} name="Modal" />
    <NavigationToInternalPage path={Path.TextInput} name="Text Input" />
    <NavigationToInternalPage path={Path.Colors} name="Colors" />
    <NavigationToInternalPage path={Path.Images} name="Images" />
    <NavigationToInternalPage path={Path.SizeAware} name="Size Aware" />
    <NavigationToInternalPage path={Path.Select} name="Select" />
    <NavigationToInternalPage path={Path.Slider} name="Slider" />
    <NavigationToInternalPage path={Path.Switch} name="Switch" />
    <NavigationToInternalPage path={Path.Checkbox} name="Checkbox" />
    <NavigationToInternalPage path={Path.SelectView} name="Select View" />
    <NavigationToInternalPage path={Path.Combobox} name="Combobox" />
    <NavigationToInternalPage path={Path.BarChart} name="Bar Chart" />
    <NavigationToInternalPage path={Path.PieChart} name="Pie Chart" />
    <NavigationToInternalPage path={Path.Countdown} name="Countdown" />
    <NavigationToInternalPage path={Path.Hoverable} name="Hoverable" />
    <NavigationToInternalPage path={Path.Checklist} name="Checklist" />
    <NavigationToInternalPage path={Path.Confetti} name="Confetti" />
    <NavigationToInternalPage path={Path.GridTable} name="CSS Grid Table" />
    <NavigationToInternalPage
      path={Path.ConfirmationModal}
      name="Confirmation Modal"
    />
    <NavigationToInternalPage
      path={Path.OnHoverAction}
      name="On Hover Action"
    />
    <NavigationToInternalPage path={Path.TabNavigation} name="Tab Navigation" />
    <NavigationToInternalPage path={Path.AmountInput} name="Amount Input" />
    <NavigationToInternalPage path={Path.ShowOnce} name="Show Once" />
    <NavigationToInternalPage path={Path.Menu} name="Popover Menu" />
    <NavigationToInternalPage path={Path.DynamicForm} name="Dynamic Form" />
    <NavigationToInternalPage path={Path.Resume} name="Resume" />
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
    <NavigationToInternalPage path={Path.Promotion} name="Promotion" />

    <NavigationToInternalPage path={Path.Nfts} name="Wallet's NFTs" />
    <NavigationToInternalPage path={Path.IPFS} name="Upload to IPFS" />
  </VStack>
)
