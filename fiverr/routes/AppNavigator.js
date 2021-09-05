import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stepper from "../screens/Stepper/Stepper";
import Carousel from "../screens/Carouse1/Carousel";
import ProfileMenu from "../screens/PRofileMenu/ProfileMenu";
import Account from "../screens/Account/Account";
import Name from "../screens/Name/Name";
import DarkMode from "../screens/DarkMode/DarkMode";
import Notifications from "../screens/Notifications/Notifications";
import About from "../screens/About/About";
import Password from "../screens/Password/Password";
import AlphaWelcome from "../screens/AlphaWelcome";
import TheBasic from "../screens/The-Basic/TheBasic";
import AlphaWelcome2 from "../screens/Alpha-Welcome2/AlphaWelcome2";
import Savings from "../screens/Saving-Screen/Savings";
import PersonalFinance from "../screens/Personal-Finance/PersonalFinance";
const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Carousel" component={Carousel} />
      <Screen name="ProfileMenu" component={ProfileMenu} />
      <Screen name="Account" component={Account} />
      <Screen name="Name" component={Name} />
      <Screen name="Password" component={Password} />
      <Screen name="DarkMode" component={DarkMode} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="About" component={About} />
      <Screen name="AlphaWelcome" component={AlphaWelcome} />
      <Screen name="TheBasic" component={TheBasic} />
      <Screen name="AlphaWelcome2" component={AlphaWelcome2} />
      <Screen name="Savings" component={Savings} />
      <Screen name="Stepper" component={Stepper} />
      <Screen name="PersonalFinance" component={PersonalFinance} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
