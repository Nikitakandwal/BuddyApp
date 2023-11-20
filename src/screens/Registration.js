import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Image,
} from "react-native";
import { firebase } from "../../config";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  registerUser = async (email, password) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://auth-834ad.firebaseapp.com",
          })
          .then(() => {
            alert("Verificaton email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({ email });
          })

          .catch((error) => {
            alert(error.message);
          })
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 26,
              marginTop: 100,
              color: "white",
            }}
          >
            Welcome to
          </Text>
          <Image
            source={require("../static/logo.png")}
            style={{ width: 278.88, height: 53, marginTop: 12 }}
          />
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={{ marginTop: 40 }}>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                authCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
                onChangeText={(password) => setPassword(password)}
                authCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                registerUser(email, password);
              }}
              style={styles.button}

            >
              {/* registerUser(email, password, firstName, lastName);  */}
              <Text
                style={{ fontWeight: "bold", fontSize: 22, color: "#084bc0" }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#084bc0",
    elevation: 25,
  },
  textInput: {
    width: 310,
    height: 45,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    height: 55,
    width: 310,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
