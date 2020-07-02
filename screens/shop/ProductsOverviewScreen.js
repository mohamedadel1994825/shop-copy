import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
const ProductsOverviewScreen = ({ navigation, route }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
        title="Cart" 
        iconName="md-cart" 
        onPress={() => navigation.navigate('CartScreen')} />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  });
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {
            navigation.navigate("ProductDetails", {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
