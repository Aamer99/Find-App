import { NavigationContainer } from "@react-navigation/native";
import BottomTap from "./Components/TapBar"; // if there problem i changed this
import LandingPage from "./Screen/landingPage";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screen/Login";
import Signup from "./Screen/Signup";
import PlaceDetails from "./Screen/PlaceDetails";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
export default function App() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Tap" component={BottomTap} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="RestaurantDetails" component={PlaceDetails} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
