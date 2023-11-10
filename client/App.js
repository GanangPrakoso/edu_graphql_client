import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AddProduct from "./pages/AddProduct";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
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
          <Stack.Screen name="form" component={AddProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
