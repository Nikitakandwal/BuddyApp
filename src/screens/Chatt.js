import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function Chat({ onBack, selectedUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
      <Pressable onPress={onBack} style={styles.actionBar}>
        <Image source={require("../static/back.png")} style={{width:20, height:15, marginRight:10}}/>
        <Text>{selectedUser?.name}</Text>
      </Pressable>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }} style={styles.chat}
      />
      <View style={{paddingBottom:0}}></View>
    </>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    height: 42,
    marginTop:40,
    marginLeft:15,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",  
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});
