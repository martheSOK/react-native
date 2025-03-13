import * as React from "react";
import { Button, Text } from "react-native";
import FormRegister from "./users/Register";
import LoginForm from "./users/Login";
import ListeCours from "./cours/liste_cours";
import AddCours from "./cours/AddCours";
import UpdateCours from "./cours/update";



export function LoginScreen({navigation}) {
  return (
    <view>
        <LoginForm  navigation={navigation}></LoginForm>
    </view>
  );
}

export function RegisterScreen({navigation}) {
  return (
    <view>
        <FormRegister navigation={navigation}></FormRegister>
    </view>
  );
}


export function CoursScreen({navigation}) {
  return (
    <view>
        <ListeCours navigation={navigation}></ListeCours>
    </view>
  );
}


export function AddCoursScreen({navigation}) {
  return (
    <view>
        <AddCours navigation={navigation}></AddCours>
    </view>
  );
}


export function UpdateCoursScreen(props) {
  const { navigation ,route}=props;
  return (
    <view>
        <UpdateCours navigation={navigation} route={route}></UpdateCours>
    </view>
  );
}

export function Homes({navigation}) {
    return (
        <view>
          <Button
          title="login"
          onPress={() => navigation.navigate('login')}
          
          />

          <Button
          title="register"
          onPress={() => navigation.navigate('register')}
          />

        {/* <Button
          title="listeCours"
          onPress={() => navigation.navigate('listeCours')}
        /> */}
            
        </view>
    );
}