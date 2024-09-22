import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, BackHandler, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Group2 from "../assets/Design/Group 2.png"; 
import Group3 from "../assets/Design/Group 3.png"; 
import Group4 from "../assets/Design/Group 4.png"; 
import Group5 from "../assets/Design/Group 5.png"; 
import Group7 from "../assets/Design/Group 7.png"; 
import Group8 from "../assets/Design/Group 8.png"; 
import BottomNav from '../assets/ui/bottomNav';
export default function Home({navigation}){
    return(
        <SafeAreaView style = {{display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center"}}>
            
            <View style = {{flexDirection:"row", display:"flex", columnGap: 50, position:"relative", bottom: -150}}>
            <View style = {{flexDirection:"column", display:"flex",rowGap: 50 }}>
            <TouchableOpacity><Image style={styles.g2} source={Group2}/></TouchableOpacity>
             <TouchableOpacity><Image style={styles.g2} source={Group3}/></TouchableOpacity>
             <TouchableOpacity><Image style={styles.g2} source={Group4}/></TouchableOpacity>
            </View>
            <View style = {{flexDirection:"column", display:"flex",rowGap: 50 }}>
             <TouchableOpacity><Image style={styles.g2} source={Group5}/></TouchableOpacity>
             <TouchableOpacity><Image style={styles.g2} source={Group7}/></TouchableOpacity>
             <TouchableOpacity><Image style={styles.g2} source={Group8}/></TouchableOpacity>
            </View>
            </View>
    
            <BottomNav/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    g2:{
        height: 125,
        width: 125
    }
})