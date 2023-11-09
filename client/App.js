import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://3a2f-101-128-103-53.ngrok-free.app/",
  cache: new InMemoryCache(),
});

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}
