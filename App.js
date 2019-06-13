/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import BottomNav from './BottomNav';
import Offer from './Offer'
import OffersList from './OffersList';
const URL ="http://192.168.1.133:4000/api/offres";



export default class App extends Component {
constructor(props){
  super(props);
  this.state= {dataSource: "", isLoading: true}
}
  componentDidMount(){
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.offres,
        });
        
      })
      .catch((error) =>{
        console.error(error);
      });  }
  render() {
    
    return (<View style={styles.container}>

          <View style={styles.navbar}>
            <Text style={styles.brand}>ANPE Offres</Text>
          </View>
          
          <OffersList data={this.state.dataSource}/>
          
          <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
 
  navbar:{
    height:55,
    backgroundColor:'#0D1C22',
    elevation:10,
    paddingHorizontal: 15,
    flexDirection:'row',
    alignItems:'center',
  },

  


  brand: {
    color: 'white',
    fontWeight:'bold',
    fontSize:20
  }
  
});
