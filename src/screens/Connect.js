import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import ChatApp from './ChatApp'
import { useNavigation } from "@react-navigation/native";
import Dashboard from './Dashboard';

const Connect = () => {
  const navigation = useNavigation();
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      (setConnecting(true));
    }, 2000);
  });
  useEffect(() => {
    setTimeout(() => {
      (setConnected(true));
    }, 5000);
  });
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Dashboard);
    }, 10000);
  });

  const navi = () => {
    // Navigate to the ChatApp screen when the button is pressed
    navigation.navigate('ChatApp');
  };
  return (
    <View style={styles.container}>
        <Image source={require('../static/Ellipse3.png')} style={{marginTop:102}}/>
        <Image source={require('../static/Ellipse1.png')} style={{marginTop:-360}}/>
        <Image source={require('../static/Ellipse2.png')} style={{marginTop:-290}}/>
        {connecting||connected?(connected?<Image source={require('../static/Vector.png')} style={{marginTop:-195}}/>:<Image source={require('../static/Ellipse4.png')} style={{marginTop:-195}}/>) :  <Image source={require('../static/logo2.png')} style={{marginTop:-145}}/>}
    {connecting? <Image/>   :<Image source={require('../static/Frame1.png')} style={{marginTop:-230, marginLeft:-190}}/> }
       {connecting||connected? (connected? <Text style={{marginTop:170, color:'white', fontSize:28, fontWeight:600}}
          >
          Connected Succesfully
          </Text>:<Text style={{marginTop:150, color:'white', fontSize:28, fontWeight:600}}
          >
          Connecting...
          </Text> ):    <Text style={{marginTop:340, color:'white', fontSize:28, fontWeight:600}}>Connect with Pendant</Text>}
          {connected?    <TouchableOpacity style={styles.button}  onPress={navi}
          >

     <Text
            style={{ fontWeight: "bold", fontSize: 22, color: "#084bc0" }}
          >
          Connect with Doctors
          </Text>
        </TouchableOpacity>:   <TouchableOpacity style={styles.button}  onPress={navi}
          >

     <Text
            style={{ fontWeight: "bold", fontSize: 22, color: "#084bc0" }}
          >
          Connect with Doctors
          </Text>
        </TouchableOpacity>}
    </View>
  )
}

export default Connect

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
    button:{
        color:'#084BC0',
        width:327,
        height:56,
        Align:'center',
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: "white",
    },
    darkContainer: {
      backgroundColor: '#333', 
    }
})