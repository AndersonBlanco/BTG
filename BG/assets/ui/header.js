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
            
        </View>
    )
}
