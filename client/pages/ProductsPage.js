import { View, Text, FlatList } from "react-native";
import Card from "../components/Card";
import LottieView from "lottie-react-native";
import { gql, useQuery } from "@apollo/client";

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
    </View>
  );
}
