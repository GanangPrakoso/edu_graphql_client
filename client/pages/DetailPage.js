import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery, gql } from "@apollo/client";

const GET_DETAIL = gql`
  query Products($productId: ID!) {
    product(id: $productId) {
      id
      mainImg
      name
      price
      description
    }
  }
`;

export default function DetailPage() {
  const route = useRoute();
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: {
      productId: route.params.id,
    },
  });

  console.log({ loading, error, data });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: data?.product?.mainImg || "",
        }}
      />
      <View style={{ padding: 16, paddingRight: 60 }}>
        <Text style={styles.title}>{data?.product?.name || ""}</Text>
        <Text
          style={{
            marginBottom: 14,
          }}
        >
          {data?.product?.description || ""}
        </Text>
        <Text style={styles.price}>Rp. {data?.product?.price || ""}</Text>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: windowHeight / 2,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 14,
  },
  price: {
    fontSize: 24,
    fontWeight: "500",
    color: "grey",
  },
});
