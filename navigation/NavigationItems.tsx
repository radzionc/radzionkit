import { NavigationToInternalPage } from "lib/ui/Navigation/Sidebar/NavigationToInternalPage";
import { VStack } from "lib/ui/Stack";
import { Path } from "navigation/Path";

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
    <NavigationToInternalPage path={Path.SelectView} name="Select View" />
    <NavigationToInternalPage path={Path.Combobox} name="Combobox" />
    <NavigationToInternalPage path={Path.PieChart} name="PieChart" />
    <NavigationToInternalPage path={Path.Countdown} name="Countdown" />
    <NavigationToInternalPage path={Path.GridTable} name="CSS Grid Table" />
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
    <NavigationToInternalPage path={Path.Nfts} name="Wallet's NFTs" />
    <NavigationToInternalPage path={Path.IPFS} name="Upload to IPFS" />
  </VStack>
);
