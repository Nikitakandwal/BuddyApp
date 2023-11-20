import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { firebase } from "../../config";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Dashboard from "./Dashboard";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailField, setEmailField] = useState(true);
  const [passwordField, setPasswordField] = useState(true);

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Dashboard")
    } catch (error) {
      alert(error);
    }
  };

  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email set");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const checkFields = () => {
    if (email == "") {
      setEmailField(false);
    } else if (password == "") {
      setPasswordField(false);
    } else if (!email == "") {
      setEmailField(true);
    } else if (!password == "") {
      setPasswordField(true);
    }
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
          <View style={{ marginTop: 30 }}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              authCapitalize="none"
              autoCorrect={false}
            />

            {!emailField ? (
              <Text style={{ marginBottom: 2, color: "red" }}>
                Email field is required
              </Text>
            ) : null}
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
              authCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
            {!passwordField ? (
              <Text style={{ marginBottom: 2, color: "red" }}>
                Password field is required
              </Text>
            ) : null}
            <TouchableOpacity
              onPress={() => {
                forgetPassword();
              }}
              style={{ marginLeft: 179 }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "white" }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              checkFields();
              loginUser(email, password);
            }}
            style={styles.button}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 22, color: "#084bc0" }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Registration")}
            style={{ marginTop: 20 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Don't have an account? Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
    borderRadius: 10,
    backgroundColor: "white",
  },
});
