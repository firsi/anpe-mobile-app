import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = () => {
    return <View style={styles.bottomNav}>
        <TouchableOpacity><Icon color='white' name="settings" size={40}></Icon></TouchableOpacity>
        <TouchableOpacity><Icon color='white' name="home" size={40}></Icon></TouchableOpacity> 
        <TouchableOpacity><Icon color='white' name="search" size={40}></Icon></TouchableOpacity>          
    </View>
}


const styles = StyleSheet.create({

    bottomNav:{
        height:60,
        backgroundColor:'#0F2028',
        paddingHorizontal: 15,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
      }
});

export default BottomNav;