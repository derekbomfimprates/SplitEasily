import React, { Profiler, useState } from "react";
import { View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style/MainStyle";
import {NavigationContainer } from '@react-navigation/native';

import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from "./screens/SignUp";
import AddExpense from "./screens/AddExpense";
import ViewExpenses from "./screens/ViewExpense";
import CloseTrip from "./screens/CloseTrip";
import Summary from "./screens/Summary";
import Profile from "./screens/Profile";
const Stack = createStackNavigator();
  
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="ViewExpenses" component={ViewExpenses} />
        <Stack.Screen name="CloseTrip" component={CloseTrip} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }
  export default function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }



