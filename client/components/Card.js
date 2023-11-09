import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Card({ product }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("detail", {
          id: product.id,
        })
      }
    >
      <View
        style={{
          width: styles.screenSize.width / 2.5,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Image
          source={{
            uri: product.mainImg,
          }}
          style={{
            width: styles.screenSize.width / 2.5,
            height: styles.screenSize.height / 4,
            resizeMode: "cover",
            borderRadius: 14,
          }}
        />
        <Text
          style={{
            color: "black",
            fontSize: 14,
            marginTop: 10,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {product.name}
        </Text>
      </View>
    </Pressable>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screenSize: { width: windowWidth, height: windowHeight },
});
