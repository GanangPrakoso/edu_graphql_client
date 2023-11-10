import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { gql, useMutation } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation Mutation($newProduct: ProductInput) {
    addProduct(newProduct: $newProduct) {
      id
    }
  }
`;

const AddProduct = () => {
  const [addHandler, { loading, error, data }] = useMutation(ADD_PRODUCT, {
    refetchQueries: ["Products"],
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    try {
      const newValue = {
        name,
        description,
        mainImg,
        price: +price,
      };

      await addHandler({ variables: { newProduct: newValue } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nambah bwang</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setMainImg(text)}
        value={mainImg}
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPrice(text)}
        value={price}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Dar!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default AddProduct;
