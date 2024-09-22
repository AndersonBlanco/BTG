import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, BackHandler, Image, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import HomeIcon  from "../homeIcon";
import Bookmark from "../bookmark";
import UserIcon from "../userIcon";
import GearIcon from '../gear';
import Home from '../../Pages/Home';
import { useState } from 'react';
export default function BottomNav({navigation}){
    const size = 30; 
    const styles = StyleSheet.create({
        cont:{
            flexDirection:"row",
            columnGap: 75,
            position:"absolute",
            bottom: -Dimensions.get("window").height * .38,
            alignItems:"center",
            justifyComntent:"center",
            paddingLeft: 40,
            width:"100%"
        }
    })
    const [currentNav, setCurrentNav] = useState("Home");

    return(//navigation.replace("signin"); 
        <View style= {styles.cont}>
            <TouchableOpacity onPress = {() => {setCurrentNav("Bookmark")}}><Bookmark fill = {currentNav == 'Bookmark'? "#F5EE35" : "white"} style = {{height: size, width: size}}/></TouchableOpacity>
            <TouchableOpacity onPress = {() => {setCurrentNav("Home")}}><HomeIcon fill = {currentNav == 'Home'? "black" : "white"} style = {{height: size, width: size}}/></TouchableOpacity>
            <TouchableOpacity onPress = {() => {setCurrentNav("Profile")}}><UserIcon fill = {currentNav == 'Profile'? "black" : "white"} style = {{height: size, width: size}}/></TouchableOpacity>
            <TouchableOpacity onPress = {() => {setCurrentNav("Settings")}}><GearIcon fill = {currentNav == 'Settings'? "black" : "white"} style = {{height: size, width: size}}/></TouchableOpacity>
        </View>
    )
}
