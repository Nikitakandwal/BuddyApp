import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import { firebase } from "../../config";

const Health = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [userInfo, setUserInfo] = useState(null);

  const [childWeight, setChildWeight] = useState(null);

  const fetchUserData = async (retryCount = 3) => {
    try {
      console.log("came into fetchuser data function!");
      const user = firebase.auth().currentUser;
      const userDoc = await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get();
  
      if (userDoc.exists) {
        console.log("Inside if loop!");
        const userData = userDoc.data();
        setUserInfo(userData);
  
        if (userData && userData.childWeight !== undefined) {
          console.log("getting child weight");
          setChildWeight(userData.childWeight);
        } else {
          console.warn("childWeight property not found in user data");
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (retryCount > 0) {
        setTimeout(() => {
          console.log("retrying");
          fetchUserData(retryCount - 1);
        }, 5000);
      }
 
    }
  };
  
  const getChildWeight = () => {
    fetchUserData();
  };

  useEffect(() => {
    console.log("use effect started")
    getChildWeight();
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.darkContainer]}
    >
      <View
        style={{
          backgroundColor: "#084bc0",
          height: 200,
          width: 342,
          borderRadius: 20,
          margin: 10,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.69)",
            marginLeft: 20,
            marginTop: 15,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Health Report
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 50,
            marginLeft: 22,
            fontWeight: 900,
          }}
        >
          70 %
        </Text>
        <Image
          source={require("../static/curverline.png")}
          style={{ marginTop: -90 }}
        />
        <Text style={{ color: "#fff", marginLeft: "48%", marginTop: -65 }}>
          Rohit improves his health {"\n"}condition in past month.
        </Text>
        <Text
          style={{
            color: "#fff",
            fontWeight: 800,
            fontSize: 22,
            marginLeft: "59%",
          }}
        >
          See Details
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            height: 191,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontWeight: 800,
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Nutrition
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 27, fontWeight: 700 }}>
            485 mg
          </Text>
          <View>
            <Image
              source={require("../static/frame01.png")}
              style={{ marginTop: 20, marginLeft: 4 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 191,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 185,
            marginTop: -190,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontWeight: 800,
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Weight
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 27, fontWeight: 700 }}>
            {childWeight !== null ? `${childWeight} kg` : "Loading..."}
          </Text>

          <View>
            <Image
              source={require("../static/frame02.png")}
              style={{ marginTop: 34, width: 160, marginLeft: 2 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 221,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontWeight: 800,
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Calorie
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 27, fontWeight: 700 }}>
            4029 kcal
          </Text>

          <View>
            <Image
              source={require("../static/frame03.png")}
              style={{ marginTop: 34, width: 160, marginLeft: 2 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 221,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 185,
            marginTop: -220,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontWeight: 800,
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Sleep
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 27, fontWeight: 700 }}>
            51h
          </Text>

          <View>
            <Image
              source={require("../static/frame04.png")}
              style={{ marginTop: 47, width: 160, marginLeft: 2 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 221,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginBottom: 70,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontWeight: 800,
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Hydration
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 27, fontWeight: 700 }}>
            590 ml
          </Text>

          <View>
            <Image
              source={require("../static/frame05.png")}
              style={{ marginTop: 34, width: 160, marginLeft: 2 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 221,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 185,
            marginTop: -290,

            marginBottom: 70,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontWeight: 800,
              fontSize: 17,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Add
          </Text>
          <View>
            <Image
              source={require("../static/frame06.png")}
              style={{ marginTop: 110, width: 68, height: 64, marginLeft: 90 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Health;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#F2F5F9",
    width: "100%",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
});
