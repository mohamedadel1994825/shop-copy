import React from "react";
import { FlatList, Text, Platform, View } from "react-native";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import OrderItem from '../../components/shop/OrderItem'
import Colors from "../../constants/Colors";
const OrdersScreen = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.orders);
  navigation.setOptions({
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTintColor: Platform.OS === "android" ? Colors.accent : "white",
    headerTitleStyle: {},
    headerTitleAlign: "center",
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
    data={orders}
    keyExtractor={item => item.id}
    renderItem={itemData => (
      <OrderItem
        amount={itemData.item.totalAmount}
        date={itemData.item.readableDate}
        items={itemData.item.items}
      />
    )}
  />
  );
};
export default OrdersScreen;
