import { NavigationContainer } from "@react-navigation/native";
import BottpmTap from "./Components/TapBar";
import LandingPage from "./Screen/landingPage";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import RestaurantDetail from "./Screen/RestaurantDetail";

export default function App() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Tap" component={BottpmTap} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Singup" component={Signup} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
