import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export default function DetailPage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/419496/item/goods_68_419496.jpg?width=734",
        }}
      />
      <View style={{ padding: 16, paddingRight: 60 }}>
        <Text style={styles.title}>MEN SOFT TOUCH LONG-SLEEVE</Text>
        <Text
          style={{
            marginBottom: 14,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, optio
          qui ullam quam voluptates consequatur sapiente nesciunt praesentium
          minima asperiores vitae, dolore culpa quas atque dolores nihil in, hic
          accusamus
        </Text>
        <Text style={styles.price}>Rp. 20000</Text>
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
