import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LandingPage() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.bg}
      resizeMode="cover"
      source={require("../assets/si-imut-dari-laut-jawa.png")}
    >
      <View style={styles.opacityContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>GraphQL client</Text>
          <Text style={styles.desc}>with apollo client</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("products")}
        >
          <Text style={styles.buttonText}>You're always on my mind ❤️ </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  opacityContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.60)",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
  },
  desc: {
    color: "white",
    fontSize: 30,
    fontWeight: "200",
  },
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
