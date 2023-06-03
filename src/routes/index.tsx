import { NavigationContainer } from "@react-navigation/native";

// import TabRoutes from "./tab.routes";
import DrawerRoutes from "./tab.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}
