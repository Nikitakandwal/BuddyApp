import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { useDarkMode } from "./DarkModeContext";

const Games = () => {  
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text
        style={{ color: "#fff", fontSize: 48, fontWeight: 600, marginTop: 20, marginLeft:39 }}
      >
        PLay n' Learn
      </Text>
      <Text
        style={{
          color: "rgba(255, 255, 255, 0.69)",
          fontSize: 28,
          fontWeight: 600,
          marginTop: 20, marginLeft:45
        }}
      >
        Fun Activities for kids
      </Text>

      <ScrollView>
        <View
          style={{
            height: 221,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginTop: 20,
          }}
        >
          <View style={styles.cards}>
            <Image
              source={require("../static/first.png")}
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 17 }}>
            Color {"\n"}Freestyle
          </Text>
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
          <View
            style={styles.cards}
          >
            <Image
              source={require("../static/second.png")}
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 17, marginTop:10 }}>
            Flash Cards
          </Text>
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
          <View
            style={styles.cards}
          >
            <Image
              source={require("../static/third.png")}
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 17, marginTop:10}}>
              Maths
          </Text>
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
          <View
            style={styles.cards}
          >
            <Image
              source={require("../static/fourth.png")}
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 17 }}>
            Audio {"\n"}Stories
                      </Text>
        </View>
        <View
          style={{
            height: 221,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginBottom:70,
            marginTop: 10,
          }}
        >
          <View
            style={styles.cards}
          >
            <Image
              source={require("../static/fourth.png")}
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 17 }}>
            Color {"\n"}Freestyle
          </Text>
        </View>
        <View
          style={{
            height: 221,
            width: 166,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 185,
            marginTop: -290,
            
            marginBottom:70,
          }}
        >
          <View
            style={styles.cards}
          >
            <Image
              source={require("../static/third.png")}
              style={{ marginTop: 16 }}
            />
          </View>
          <Text style={{ textAlign: "center", fontWeight: 800, fontSize: 17 }}>
            Color {"\n"}Freestyle
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#084bc0",
    elevation: 25,
  },
  cards: {
    height: 160,
    width: 148,
    backgroundColor: "#dae4f6",
    marginLeft: 10,
    marginTop: 10,
    borderColor:'#084bc0',
    borderWidth:1,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
});
