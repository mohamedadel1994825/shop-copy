import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";
import BottomTabNavigator from "./BottomTabNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//       },
//       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
//     }
//   }
// );
const ProductsStack = createStackNavigator();
const Products = () => (
  <ProductsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? Colors.accent : "white",
      headerTitleStyle: {},
      headerTitleAlign: "center",
    }}
  >
    <ProductsStack.Screen
      name="AllProducts"
      component={ProductsOverviewScreen}
    />
    <ProductsStack.Screen
      name="ProductDetails"
      component={ProductDetailScreen}
      // options={({ route }) => ({ title: route.params.user })}
    />
    <ProductsStack.Screen name="CartScreen" component={CartScreen} />
  </ProductsStack.Navigator>
);
const OrdersStack = createStackNavigator();
const Orders = () => (
  <OrdersStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? Colors.accent : "white",
      headerTitleStyle: {},
      headerTitleAlign: "center",
    }}
  >
    <ProductsStack.Screen name="Orders" component={OrdersScreen} />
  </OrdersStack.Navigator>
);
const Drawer = createDrawerNavigator();
const MyDrawer = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Products" component={Products} 
       options={{
        drawerIcon: ({ focused, size ,color}) => (
          <Ionicons name="md-cart" color={focused?Colors.primary:color}
          size={22}
          />
        ),
      }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({ focused, size ,color}) => (
            <Ionicons name="md-list" color={focused?Colors.primary:color}
            size={22}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
export default MyDrawer;
