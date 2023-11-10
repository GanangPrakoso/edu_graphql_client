import { View, Text, FlatList } from "react-native";
import Card from "../components/Card";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "MEN SOFT TOUCH LONG-SLEEVE",
      slug: "men-soft-touch-crew-neck-long-sleeve-t-shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, optio qui ullam quam voluptates consequatur sapiente nesciunt praesentium minima asperiores vitae, dolore culpa quas atque dolores nihil in, hic accusamus",
      price: 10000,
      mainImg:
        "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/419496/item/goods_68_419496.jpg?width=734",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 2,
      name: "WOMEN UNIQLO+ DRY-EX",
      slug: "women-uniqloplus-dry-ex-crew-neck-short-sleeve-t-shirt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, optio qui ullam quam voluptates consequatur sapiente nesciunt praesentium minima asperiores vitae, dolore culpa quas atque dolores nihil in, hic accusamus",
      price: 20000,
      mainImg:
        "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/431328/item/goods_64_431328.jpg?width=734",
      categoryId: 2,
      authorId: 1,
    },
    {
      id: 3,
      name: "KIDS U STRIPED SHORT-SLEEVE",
      slug: "kids-u-striped-short-sleeve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, optio qui ullam quam voluptates consequatur sapiente nesciunt praesentium minima asperiores vitae, dolore culpa quas atque dolores nihil in, hic accusamus",
      price: 50000,
      mainImg:
        "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/438173/item/goods_55_438173.jpg?width=734",
      categoryId: 3,
      authorId: 1,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 28,
      }}
    >
      <FlatList
        data={products}
        renderItem={({ item }) => <Card product={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
}
