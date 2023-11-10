import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Card from "../components/Card";
import LottieView from "lottie-react-native";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      mainImg
    }
  }
`;

export default function ProductsPage() {
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  console.log({ loading, error, data });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 28,
      }}
    >
      <FlatList
        data={data?.products || []}
        renderItem={({ item }) => <Card product={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("form")}
      >
        <Text style={styles.buttonText}>Nambah bwang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fb6f92",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
});
