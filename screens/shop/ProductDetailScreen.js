import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import Product from "../../models/product";
import * as cartActions from "../../store/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
const ProductDetailScreen = ({ navigation, route }) => {
  let productId = route.params.productId;
  let selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );
  navigation.setOptions({
    title: route.params.productTitle,
    headerTitleStyle: {
      fontFamily: "OpenSans-Bold",
    },
  });
  console.log("props", navigation);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.description}>{selectedProduct.description}</Text>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    alignItems: "center",
    marginVertical: 10,
  },
  details: { alignItems: "center" },
  description: {
    fontSize: 18,
    marginHorizontal: 5,
    textAlign: "center",
    fontFamily: "OpenSans-Regular",
  },
  price: {
    fontSize: 15,
    color: Colors.graish,
    fontFamily: "OpenSans-Bold",
  },
});
