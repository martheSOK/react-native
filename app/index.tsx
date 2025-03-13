import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddCoursScreen, CoursScreen, Homes, LoginScreen, RegisterScreen, UpdateCoursScreen } from "@/components/screens";
import { AuthProvider } from "@/components/users/provider/provider";


// import { CreationCoursScreen, HomeScreen, listeCours , loginCr } from "module";

 
  const Stack = createNativeStackNavigator();

  export default function Index() {
    return (
      
      <AuthProvider>
        <Stack.Navigator>
            <Stack.Screen name="index" component={Homes} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="listeCours" component={CoursScreen} />
            <Stack.Screen name="addCours" component={AddCoursScreen} />
            <Stack.Screen name="editCours" component={UpdateCoursScreen} /> 
        </Stack.Navigator>
      </AuthProvider>

    );


  // return (
  //   <View
  //     // style={{
  //     //   flex: 1,
  //     //   justifyContent: "center",
  //     //   alignItems: "center",
  //     //   }} >
      
  //   >
  //     <Text style={styles.title}>Bonjour marthe</Text>
  //     <Text  style={styles.text}>Je suis au cours</Text>

  //      <Image style={styles.image} source={require('../assets/images/react-logo.png')}></Image> ls


  //     <Image source={{uri:'http://img.freepik.com/photos-gratuite/panier-plein-legumes_1112-316.jpg?t=st=1738773825~exp=1738777425~hmac=b129ee3d30292e761711bc4209e7063b78175d8809eaf2fde9119c4275eea4e1&w=826'}}></Image>
  //     <Link href={{ pathname: '/About'}}><Text>About as</Text></Link>
  //   </View>
  // );
}

const styles=StyleSheet.create(
  {
    title:{
      flex:1,
      textAlign: 'center',
      backgroundColor: 'gray',
      
    } ,
    text:{
      textAlign:'center',
      color:'red'
      
    },
    image:{
        width: 100,
        height: 100
    }
  }
)
