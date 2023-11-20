import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SectionList,
  Alert
} from "react-native";

import Spinner from "react-native-loading-spinner-overlay";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { useDarkMode } from "./DarkModeContext";
import { firebase } from "../../config";

const Stack = createStackNavigator();

const DetailsScreen = ({ route }) => {
  const { userInfo } = route.params;

  return (
<SafeAreaView style={styles.container}>
      <Text>User Details</Text>
      {userInfo ? (
        <View>
          <Text>First Name: {userInfo.firstName}</Text>
          <Text>Last Name: {userInfo.lastName}</Text>
          <Text>Gender: {userInfo.gender}</Text>
          <Text>Job Description: {userInfo.jobDescription}</Text>
          <Text>Text: {userInfo.text}</Text>
          <Text>Text: {userInfo.childWeight}</Text>
          <Text>Text: {userInfo.childHeight}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const DATA = [
  {
    title: 'General Settings',
    data: ['Child', 'Notification', 'Preferences', 'Security']
  },
  {
    title: 'Accessibility',
    data: ['Language', 'Dark Mode'],
  },
  {
    title: 'Help & Support',
    data: ['Help Center', 'Contact Us']
  },
  {
    title: 'Sign Out',
    data: ['Sign Out']
  },
  {
    title: 'Warning',
    data: ['Delete Account']
  }
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (retryCount = 3) => {
    try {
      setLoading(true);
      const user = firebase.auth().currentUser;
      const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
  
      if (userDoc.exists) {
        setUserInfo(userDoc.data());
        navigation.navigate("Details", { userInfo: userDoc.data() });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (retryCount > 0) {
        setTimeout(() => {
          fetchUserData(retryCount - 1);
        }, 5000);
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleItemClick = (item) => {
    if (item === "Sign Out") {
      Alert.alert(
        "Sign Out",
        "Are you sure you want to sign out?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              firebase.auth().signOut().then(() => {
                  console.log("User signed out successfully");
                })
                .catch((error) => {
                  console.error("Error signing out:", error.message);
                });            
            },
          },
        ],
        { cancelable: false }
      );
    } else if (item === "Delete Account") {
      const user = firebase.auth().currentUser;

      Alert.alert(
        "Delete Account",
        "Are you sure you want to delete your account?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              try {
                await user.delete();
                console.log("Account deleted successfully!");
              } catch (error) {
                console.error("Error deleting account:", error.message);
               }
          },
        }
        ],
        { cancelable: false }
      );
    }
    else if(item==='Help Center'){
        Alert.alert(
          "Help Center",
          "For assistance, contact:\nPhone: 123-456-7890\nEmail: help@example.com"
        );
      
    }
    else  if (item === "Child") {
      fetchUserData();
    }else if (item === 'Dark Mode') {
      toggleDarkMode();
    } 
  };
 

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>My Account</Text>
       <View
          style={{
            marginTop: 20,
            backgroundColor: "#084BC0",
            height: 78,
            width: 327,
            borderRadius: 15,
          }}
        >
          <Image
            source={require("../static/rectangle.png")}
            style={{ width: 50, height: 50, margin: 14 }}
          />
          <Text
            style={{
              marginTop: -65,
              color: "white",
              fontWeight: "600",
              fontSize: 18,
              marginLeft: 80,
            }}
          >
            Anita Sharma
          </Text>
          <Text style={{ color: "white", marginLeft: 80 }}>
            anitasharma12@gmail.com
          </Text>
        </View>
        
        <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.button, isDarkMode && styles.darkModeButton]}
            onPress={() => handleItemClick(item)}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkModeButtonText]}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[styles.header, isDarkMode && styles.darkText]}>{title}</Text>
        )}
      />
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerText}
      />
    </SafeAreaView>
  );
};

const Profile = () => {
  return (
      <Stack.Navigator initialRouteName="ProfileScreen">
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
};


export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 15,
    backgroundColor: "#FFF",
    marginBottom:55
  },
  button: {
    marginTop: 20,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#484C52",
  },
  header: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  darkModeButton: {
    marginTop: 20,
    height: 56,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkModeButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#484C52',
  },
  darkText:{
    color:'white'
  },
  spinnerText: {
    color: '#FFF',
  },
});