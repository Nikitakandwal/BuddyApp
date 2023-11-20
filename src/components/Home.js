import { StyleSheet, ScrollView, FlatList, SafeAreaView, Text, View, Image } from "react-native";
import MapScreen from "./MapScreen";
import Task from "./Task";
import { useDarkMode } from "./DarkModeContext";

export default function Home() {
  const { isDarkMode } = useDarkMode();
  return (   
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
       <ScrollView>
      <Text style={styles.subtitle}>Monday, 30 Oct 23</Text>
      <Text style={styles.title}>Hello, Phos!</Text>
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "600" }}>
        Tasks
      </Text>
      <Task/>
     <View>
      <Image source={require('../static/Frame.png')} style={{height:292.84, width:342, marginLeft:-3, marginTop:10}}></Image>
     </View>
     <ScrollView horizontal={true}>
     <View
          style={{
            height: 181,
            width: 141,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 0,
            marginTop: 20,
            borderColor:'#3668C0',
            borderWidth:1
          }}
        >
            <Text style={{ textAlign: "left", fontWeight: 800, fontSize: 17, marginTop:10, marginLeft:10}}>
            Nutrition
          </Text>
          <Text style={{marginLeft:10, fontSize:27, fontWeight:700}}>485 mg</Text>
          <View>
            <Image
              source={require("../static/frame01.png")}
              style={{ marginTop: 15, marginLeft:4, width:130}}
            />
          </View>
        
        </View>
        <View
          style={{
            height: 181,
            width: 141,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 14,
            marginTop: 21,
            borderColor:'#3668C0',
            borderWidth:1
          }}
        >
               <Text style={{ textAlign: "left", fontWeight: 800, fontSize: 17, marginTop:10, marginLeft:10}}>
            Weight
          </Text>
          <Text style={{marginLeft:10, fontSize:27, fontWeight:700}}>49 kg</Text>
       
          <View>
            <Image
              source={require("../static/frame02.png")}
              style={{marginTop: 14,width:120, marginLeft:10 }}
            />
            
          </View>
         
        </View>
        <View
          style={{
            height: 181,
            width: 141,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginTop: 21,
            borderColor:'#3668C0',
            borderWidth:1
          }}
        >
       <Text style={{ textAlign: "left", fontWeight: 800, fontSize: 17, marginTop:10, marginLeft:10}}>
            Calorie
          </Text>
          <Text style={{marginLeft:10, fontSize:27, fontWeight:700}}>4029 kcal</Text>
       
          <View>
            <Image
              source={require("../static/frame03.png")}
              style={{marginTop: 5,width:130, marginLeft:0 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 181,
            width: 141,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginTop: 21,
            borderColor:'#3668C0',
            borderWidth:1
          }}
        >
         <Text style={{ textAlign: "left", fontWeight: 800, fontSize: 17, marginTop:10, marginLeft:10}}>
            Sleep
          </Text>
          <Text style={{marginLeft:10, fontSize:27, fontWeight:700}}>51h</Text>
       
          <View>
            <Image
              source={require("../static/frame04.png")}
              style={{marginTop: 10,width:130, marginLeft:3 }}
            />
          </View>
          </View>
        <View
          style={{
            height: 181,
            width: 141,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginBottom:30,
            marginTop: 21,
            borderColor:'#3668C0',
            borderWidth:1
          }}
        >
         <Text style={{ textAlign: "left", fontWeight: 800, fontSize: 17, marginTop:10, marginLeft:10}}>
           Hydration
          </Text>
          <Text style={{marginLeft:10, fontSize:27, fontWeight:700}}>590 ml</Text>
       
          <View>
            <Image
              source={require("../static/frame05.png")}
              style={{marginTop: 10,width:130, marginLeft:5 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 181,
            width: 141,
            backgroundColor: "#fff",
            borderRadius: 15,
            marginLeft: 10,
            marginTop: 21,
            borderColor:'#3668C0',
            borderWidth:1
          }}
        >
        <Text style={{ textAlign: "left", fontWeight: 800, fontSize: 17, marginTop:10, marginLeft:10}}>
            Add
          </Text>
          <View>
            <Image
              source={require("../static/frame06.png")}
              style={{marginTop: 72,width:68, height:64, marginLeft:70 }}
            />
          </View>
        </View>
      </ScrollView>
      <View>
          
        <MapScreen/>
        </View>
      <View>
        <Text style={{fontSize:21, fontWeight:600}}>
          Productive Calendar
        </Text>
        <View>
          <Image source={require('../static/calendar.png')} style={{marginLeft:-12, marginBottom:40}}/>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 15,
    backgroundColor:'#FFFFFF',
    },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
  },
  subtitle: {
    color: "gray",
    fontWeight: "900",
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
});
