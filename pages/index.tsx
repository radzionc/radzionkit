import type { NextPage } from "next";
import { RegularPage } from "ui/page/RegularPage";
import { Text } from "ui/Text";

const Home: NextPage = () => {
  return (
    <RegularPage title="React Toolkit">
      <Text>✨ Explore tools and components from the sidebar</Text>
    </RegularPage>
  );
};

export default Home;
