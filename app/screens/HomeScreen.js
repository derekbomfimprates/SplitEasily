import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,

} from "react-native";


import Mybutton from "../Components/MyButtons";

const HomeScreen = ({ navigation,route }) => {
  const Token=route.params?.Token;
  const Username=route.params?.username;

  const styles = StyleSheet.create({
    btn: {
      height: 20,
    },
    container: {
      backgroundColor: "white",
      flex: 1,
    },
    logoContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 250,
      height: 200,
      alignItems: "center",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
  <Text>Welcome! {Username} </Text>

        <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Image source={require("../logo/splitEasilyLogo1.png")} style={styles.logo} />
        </View>
        <Mybutton      
          style={styles.btn}
          title="Add Expense"
          customClick={() => navigation.navigate("AddExpense", {Token,Username})}
        />
        <Mybutton
          style={styles.btn}
          title="View Expense"
          customClick={() => navigation.navigate("ViewExpenses", {Token,Username})}
        />
        <Mybutton
          style={styles.btn}
          title="Close Trip"
          customClick={() => navigation.navigate("CloseTrip", {Token,Username})}
        />
         <Mybutton
          style={styles.btn}
          title="Summary"
          customClick={() => navigation.navigate("Summary", {Token,Username})}
        />
        <Mybutton
          style={styles.btn}
          title="Profile"
          customClick={() => navigation.navigate("Profile", {Token,Username})}
        />
        </ScrollView>
    
    </SafeAreaView>


    

  );
}
export default HomeScreen;

