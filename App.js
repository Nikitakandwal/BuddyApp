import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "./config";
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import Registration from "./src/screens/Registration";
import Details from "./src/screens/Details";
import ChatApp from "./src/screens/ChatApp";
import Chat from "./src/screens/Chatt";
import Connect from "./src/screens/Connect";
import { DarkModeProvider } from "./src/components/DarkModeContext";

const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Handler user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Connect"
        component={Connect}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
          name="ChatApp"
          component={ChatApp}
          options={{
            headerShown: false,
          }}
        />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <DarkModeProvider>
      <App />
      </DarkModeProvider>
    </NavigationContainer>
  );
};
