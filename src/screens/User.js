import React from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ElevatedCards from "../components/ElevatedCards";

export default function Users({
  onBack,
  users,
  onClickUser,
  userToAdd,
  setUserToAdd,
  onAddUser,
}) {
  const renderUser = ({ item }) => {
    return (
      <Pressable onPress={() => onClickUser(item)} style={styles.row}>
        <Image source={require("../static/Picture.png")} style={{marginLeft:10}}/>

        <Text style={{ color: "white", marginTop:-20, marginLeft:9 }}>{item.name}</Text>

        <Text style={{ color: "white", marginTop:12, marginLeft:-100 }}>{item.job}</Text>
      </Pressable>
    );
  };
  return (
    <>
      <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.actionBar}>
        <Image source={require("../static/back2.png")} style={{width:20, height:15, marginRight:10}}/>
        <Text style={{color:'white', fontSize:18}}>Connect with Doctors</Text>
      </Pressable>
        <View style={styles.container2}>
          <Text style={styles.headingText}>Recommended Doctors</Text>
          <ElevatedCards />
          <Text style={[styles.headingText, styles.headingTwo]}>
            Let's find the doctor
          </Text>
          <FlatList
            data={users}
            renderItem={renderUser}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    height: 23,
    marginTop:20,
    marginLeft:15,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",  
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#084bc0",
    elevation: 25,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#ffffff",
    elevation: 25,
    width: "100%",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
    marginTop: 13,
    marginLeft: -50,
    marginBottom: 10,
  },
  headingTwo: {
    color: "black",
    marginTop: 10,
    marginLeft: -90,
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

  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
    height: 58,
    width: 300,
    alignItems: "center",
    backgroundColor: "#084bc0",
    borderRadius: 10,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  addUser: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    backgroundColor: "#cacaca",
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
});
