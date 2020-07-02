import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import MyDrawer from "../shop/navigation/ShopNavigator";
import productReducer from "../shop/store/reducers/products";
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from "redux";
import {composeWithDevTools}from 'redux-devtools-extension'
import { Provider } from "react-redux";
import cartReducer from "./store/reducers/cart";
import orderReducer from "./store/reducers/orders";
enableScreens();
const rootReducer = combineReducers({
  products: productReducer,
  cart:cartReducer,
  orders:orderReducer
});
// const store=createStore(rootReducer,composeWithDevTools())
const store=createStore(rootReducer)

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          "OpenSans-Bold":require('./assets/fonts/OpenSans-Bold.ttf'),
          "OpenSans-Regular":require('./assets/fonts/OpenSans-Regular.ttf')

        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <MyDrawer />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
