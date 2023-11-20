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
  Platform,
} from "react-native";
import { firebase } from "../../config";
import "firebase/firestore";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

const db = firebase.firestore();

const Details = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [text, setText] = useState("");
  const [childWeight, setChildWeight] = useState("");
  const [childHeight, setChildHeight] = useState("");

  const navigation = useNavigation();
  const user = firebase.auth().currentUser;
  const addData = () => {
    const usersCollection = db.collection("users");

    usersCollection
      .doc(user.uid)
      .set({
        firstName,
        lastName,
        gender,
        jobDescription,
        text,
        childWeight,
        childHeight
      })
      .then(() => {
        console.log("Data successfully uploaded to Firebase!");
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        console.error("Error uploading data to Firebase: ", error);
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
              marginTop: 40,
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
            <View style={{ marginTop: 10 }}>
              <TextInput
                style={styles.nameInput}
                placeholder="First Name"
                onChangeText={(name) => setFirstName(name)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                style={{
                  width: 148,
                  height: 45,
                  fontSize: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#000",
                  marginBottom: 10,
                  textAlign: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginTop: -55,
                  marginLeft: 161,
                }}
                placeholder="Last Name"
                onChangeText={(lastName) => setLastName(lastName)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Gender"
                onChangeText={(gender) => setGender(gender)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Job Description"
                onChangeText={(desc) => setJobDescription(desc)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TextInput
                style={styles.textInput}
                placeholder="How'd you hear about us"
                onChangeText={(data) => setText(data)}
                autoCapitalize="none"
                autoCorrect={false}
              />
              {/* Add fields for child's weight and height */}
              <TextInput
                style={styles.textInput}
                placeholder="Child's Weight (Kg)"
                onChangeText={(weight) => setChildWeight(weight)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Child's Height (cm)"
                onChangeText={(height) => setChildHeight(height)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                addData();
                navigation.navigate("Dashboard");
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 22, color: "#084bc0" }}
              >
                Continue To Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Details;

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
  nameInput: {
    width: 148,
    height: 45,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
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
