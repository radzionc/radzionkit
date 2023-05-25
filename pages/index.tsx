import type { NextPage } from "next";
import { RegularPage } from "lib/ui/page/RegularPage";
import { Text } from "lib/ui/Text";

const Home: NextPage = () => {
  return (
    <RegularPage title="React Kit">
      <Text>✨ Explore tools and components from the sidebar</Text>
    </RegularPage>
  );
};

export default Home;
