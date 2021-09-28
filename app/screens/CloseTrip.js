import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View , Image, Alert} from "react-native";
import { Input, Text, Button, CheckBox } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import userServices from "../service/userService"; // import it to user the userService information
import { TextInputMask } from "react-native-masked-text"; // mask for money

import styles from "../style/MainStyle";

const CloseTrip=({ navigation, route }) =>{
  // i will use the navigation object to call the homeScreen
  const [username, setUsername] = useState(null); //username started with null
  const [expense, setExpense] = useState(null); //expense  started with null
  const [expensePrice, setExpensePrice] = useState(null); //Price  started with null
  const [isSelected, setisSelected] = useState(false); //Check Box constanteNumber started with false (is not select yet)
  const [errorUsername, seterrorUsername] = useState(null); // username validation and start with default NULL
  const [errorExpense, seterrorExpense] = useState(null); // expense validation and start with default NULL
  const [errorExpensePrice, seterrorExpensePrice] = useState(null); // Price validation and start with default NULL
  const [isLoading, setisLaoding] = useState(false); // when the user is on screen is false because they didnt click on save/signup
  const [tripLabel, setTripLabel] = useState(''); // when the user is on screen is false because they didnt click on save/signup
  const [errorTripLabel, seterrorTripLabel] = useState(null); // Price validation and start with default NULL
  const Username= route.params?.Username;
  const Token= route.params?.Token;
  const [informTrip, setinformTrip] = useState(''); //username started with null

  let pricefield=null
  const validation = () => {
      let error = false;
     
      if (tripLabel == null) {
        seterrorTripLabel("Fill up with the trip name"); // message to user to insert a correct input
        error = true;
      }
      if (username == null) {
        seterrorUsername("Fill up with the username"); // message to user to insert a correct input
        error = true;
      }
      if (expense == null) {
        seterrorExpense("Fill up with the description"); // message to user to insert a correct input
        error = true;
      }
      if (expensePrice == null) {
        seterrorExpensePrice("Fill up with a price"); // message to user to insert a correct input
        error = true;
      }
      return !error;
    };
  //supost to do: i am manipulation async fuction I need to crreat a async fuction in save
  //but i am going to do different and threat the promise to do it
  const close = () => {
 
    setisLaoding(true); // after click in save set
    // if the validation is ok, it will save

    
    // i am calling a method async, so the answer will be async, now i am set up it ! and to do it i am using await
    userServices
      .closetrip(Username, tripLabel, Token)
      .then((response) => {
        setinformTrip(response.data);
        setisLaoding(false); // take out the loading
        Alert.alert("SUCCESS!", "The trip was closed successfully.");  
        
       
      }) // if correct , get the response from promise
      .catch((error) => {
        setisLaoding(false); // take out the loading
        Alert.alert("ERRO!", "The trip wasn't closed."); 
      }); //if incorrect
  };
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
      width: 200,
      height: 200,
      resizeMode: "contain"
    },
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"} //here i am creating the behaviour of the keyboard to avoid the keyboard on text.
      style={[styles.container, specificStyle.specificContainer]}
      keyboardVerticalOffset={50} //to help me to avoid the keyboard above my text
    >
      <Text>Close your trip!</Text>
      <View style={styles.logoContainer}>
          <Image source={require("../logo/close.png")} style={styles.logo} />
        </View>
      <Input
        placeholder="Trip name"
        leftIcon={{ type: "font-awesome", name: "suitcase" }}
        onChangeText={(value) => {
          setTripLabel(value); //when the user change the text we keep the value
          seterrorTripLabel(null);
        }}
        keyboardType="default" //type of keyboard
        returnKeyType="done" //To allow user to say they already fill up the information
        errorMessage={errorTripLabel} // message about error on Label.. validation steps
      />
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && ( // if is not loading show the buttom
        <Button
          icon={<Icon name="search" size={15} color="white" />} //put a button on my screen
          title=" Search"
          buttonStyle={specificStyle.button}
          onPress={() => close()}
          
        />
       
      )}
      
      
      <View>
        
      <Text>{tripLabel}: {informTrip}</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    padding: 10,
  },
  button:{
    alignItems: 'center',
    padding: 10,
    marginTop: 16,
    marginLeft: 130,
    marginRight: 130,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12

  },
});
export default CloseTrip;