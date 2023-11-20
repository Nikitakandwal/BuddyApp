import {  Text, Platform,  View, Image } from 'react-native';

import Health from "../components/Health";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Games from "../components/Games";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Connect from './Connect';

// Thanks for watching
const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#FFFFFF"
  }
}
export default function Dashboard() {
  return (
       <Tab.Navigator screenOptions={screenOptions} >
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                                    <Image source={require('../static/home.png')} style={{width:24, height:24, tintColor:focused?'#084BC0':'#484C52'}}/>
                  <Text style={{fontSize: 12, color:(focused?'#084BC0' :'#484C52') }}>Home</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Games" 
          component={Games} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <Ionicons name="game-controller-outline" size={24} color={focused?'#084BC0':'#484C52'} />
                  <Text style={{fontSize: 12, color:(focused?'#084BC0' :'#484C52') }}>Games</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Connect" 
          component={Connect} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#084BC0",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <Ionicons name="chatbubbles-outline" size={24} color="white" />
                </View>
              )
            }
           }}
          />
          <Tab.Screen
           name="Health" 
           component={Health}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Image source={require('../static/heart.png')} style={{width:24, height:24, tintColor:focused?'#084BC0':'#484C52'}}/>
                  <Text style={{fontSize: 12, color:(focused?'#084BC0' :'#484C52') }}>Health</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Image source={require('../static/user.png')} style={{width:24, height:24, tintColor:focused?'#084BC0':'#484C52'}}/>
                  <Text style={{fontSize: 12, color:(focused?'#084BC0' :'#484C52') }}>Profile</Text>
            </View>
              )
            }
          }}
          />
       </Tab.Navigator>
)
}
//   const [name, setName] = useState(" ");

//   //change the password:
//   const changePassword = () => {
//     firebase
//       .auth()
//       .sendPasswordResetEmail(firebase.auth().currentUser.email)
//       .then(() => {
//         alert("Password reset email sent");
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   };

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection("users")
//       .doc(firebase.auth().currentUser.uid)
//       .get()
//       .then((snapshot) => {
//         if (snapshot.exists) {
//           setName(snapshot.data());
//         } else {
//           console.log("User does not exist");
//         }
//       });
//   }, []);
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//         Hello, {name.firstName}
//       </Text>
//       <TouchableOpacity
//         onPress={() => {
//           changePassword();
//         }}
//         style={styles.button}
//       >
//         <Text style={{ fontSize: 20, fontWeight: "bold" }}>
//           Change Password
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => {
//           firebase.auth().signOut();
//         }}
//         style={styles.button}
//       >
//         <Text style={{ fontSize: 20, fontWeight: "bold" }}>Sign out</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 100,
//   },
//   button: {
//     marginTop: 50,
//     height: 70,
//     width: 250,
//     backgroundColor: "026efd",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 50,
//   },
// // });
// }
