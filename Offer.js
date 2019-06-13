import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';


const Offer = (props) => {
    var regx = /(\r\n)+|\r+|\n+|\t+/i;
   var content = props.data.content.replace(/(\r\n|\n|\r|\t)/gm," ");
   content = content.replace(/\s+/g," ");
   
    return <View> 
        <View style = {styles.container} >
            <View style={styles.titleContainer}>
                <Avatar overlayContainerStyle={{backgroundColor: randomColor(), elevation: 5}}  size='medium' rounded title="I"/>
                <View>
                    <TouchableOpacity><Text style={styles.title}>{props.data.title}</Text></TouchableOpacity>
                    <Text style={styles.author}>Par ANPE</Text>
                </View>
            </View>
            </View>
            <View style={styles.content}>
                <Text numberOfLines={8} style={styles.contentText}>{content}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.date}>Date: {props.data.date}</Text>
                    <Text style={styles.read}>{props.data.read}</Text>
                </View>
            </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height:80,
        backgroundColor: '#3F6D77',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginTop: 20,
        elevation:5,
        justifyContent:'space-between'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:20,

    },

    title: {
        fontSize: 16,
        paddingLeft: 10,
        color:'#D2F0FA',
        fontWeight:'bold'
        
    },
    avatar: {
        elevation:10,
        backgroundColor:'red'
    },
    author:{
        fontSize: 15,
        color:'#D2F0FA',
        paddingLeft: 10,
        marginTop:3

    },
    infoContainer: {
        
        paddingBottom: 15,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    date:{
        fontSize:13,
        color:'#D2F0FA',  
        
    },

    read:{
        fontSize:13,
        color:'#D2F0FA'   
    },

    content: {
        backgroundColor:'#61878F',
        paddingHorizontal : 20,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        textAlign: 'justify',
        elevation:10
    },
    contentText: {
        marginVertical:10,
        color:'#B7DCE8',
        lineHeight: 20,
    }
});

function randomColor()  {
    const color = ['#4ADBC8','#3846C6','#C66238','#C60238','#B084CC','#190933','#C2F970','#772E25','#49A078','#262626'];
   
    let randomNumber =  Math.round(Math.random()*10);
   
    return color[randomNumber];
}

export default Offer;

