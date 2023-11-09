import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="products" component={ProductsPage} />
        <Stack.Screen name="detail" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
