import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image source={require('../static/Picture.png')} style={{ width: 35,marginLeft:-200}} />
          <Text style={styles.text}>Dr. Pat Gulipat</Text>
          <Text style={{ color: "lightgray", marginLeft:-60}}>Dentist</Text>
          <Text style={{color:'white', fontSize:17, marginTop:17, marginLeft:-60}}>Sunday, 27 June 2021</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../static/Picture.png')} style={{ width: 35,marginLeft:-200}} />
          <Text style={styles.text}>Dr. Pat Gulipat</Text>
          <Text style={{ color: "lightgray", marginLeft:-60}}>Dentist</Text>
          <Text style={{color:'white', fontSize:17, marginTop:17, marginLeft:-60}}>Sunday, 27 June 2021</Text>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 2,
    marginRight: 20,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 150,
    borderRadius: 14,
    marginLeft: 22,
    height:152,
    width:290,
  },
  cardElevated: {
    backgroundColor: "#084BC0",
    elevation: 4,
    height:152,
    width:290,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop:-40,
    marginLeft:20,
  },
});
