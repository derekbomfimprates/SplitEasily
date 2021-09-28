import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/MainStyle";
import userServices from "../service/userService"; // import it to user the userService information

export default function Login({ navigation }) {
  // i will use the navigation object to call the homeScreen
  const [username, setUserName] = useState(null); //email started with null
  const [password, setPassword] = useState(null); //password started with null

  const access = () => {
    // console.log("entrou")

    let data = {
      // here i am getting the variable from form and send it to
      username: username,
      password: password,
    };
    // i am calling a method async, so the answer will be async, now i am set up it ! and to do it i am using await
    userServices
      .Login(username, password)
      .then((response) => {
        //setisLaoding(false); // take out the loading

        console.log(response.data);
        let Token = response.data;

        navigation.reset({
          index: 0,
          routes: [
            {
              name: "HomeScreen",
              params: { Token: Token, username: username },
            },
          ],
        });
      }) // if correct , get the response from promise
      .catch((error) => {
        //setisLaoding(false); // take out the loading
        console.log(error);
        console.log("Error, Please!");
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
      width: 250,
      height: 200,
      alignItems: "center",
    },
  });
  const SignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../logo/splitEasilyLogo1.png")}
          style={styles.logo}
        />
      </View>
      <Input
        placeholder="username"
        leftIcon={{ type: "font-awesome", name: "envelope" }} //put an icon on my screen
        onChangeText={(value) => setUserName(value)} //when the user change the text we keep the value
        keyboardType="default" //type of keyboard
      />
      <Input
        placeholder="Password" // appear/help to use
        leftIcon={{ type: "font-awesome", name: "key" }} //put a icon on my screen
        onChangeText={(value) => setPassword(value)} //when the user change the text we keep the value
        keyboardType="default" //type of keyboard
        secureTextEntry={true} // set up to hidden password
      />

      <Button
        icon={<Icon name="check" size={15} color="white" />} //put a button on my screen
        title=" Log in"
        buttonStyle={specificStyle.button}
        onPress={() => access()}
      />

      <Button
        icon={<Icon name="user" size={15} color="white" />} //put a button on my screen
        title=" New Account"
        buttonStyle={specificStyle.button}
        onPress={() => SignUp()}
      />
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    padding: 10,
    marginTop: 16,
    marginLeft: 130,
    marginRight: 130,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
