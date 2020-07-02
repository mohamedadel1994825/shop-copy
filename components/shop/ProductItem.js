import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Button,TouchableOpacity,TouchableNativeFeedback, Platform } from "react-native";
import Colors from "../../constants/Colors";

export default ProductItem = (props) => {
    let TouchComp=TouchableOpacity;
    if (Platform.OS=='android'&&Platform.Version>=22) {
        TouchComp=TouchableNativeFeedback
    }
  return (
      <View style={styles.Product}>
      <TouchComp onPress={props.onViewDetails} useForeground  >
              <View >
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.details}>
        <Text style={styles.title}> {props.title} </Text>
        <Text style={styles.price}> ${props.price.toFixed(2)} </Text>
      </View>
      <View style={styles.actions}>
        <Button color={Colors.primary}title="View Details"></Button>
        <Button color={Colors.primary} title="to Cart" onPress={props.onAddToCart}></Button>
      </View>
    </View>
    </TouchComp>
    </View>
  );
};
const styles = StyleSheet.create({
  Product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 15,
    backgroundColor: Colors.white,
    height: 200,
    margin: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "50%",
  },
  details: {
    paddingVertical: 2,
    alignItems: "center",
    height:'15%'
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 15,
    color: Colors.graish,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    height:'35%'

  },
});
