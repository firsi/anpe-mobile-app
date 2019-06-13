import React from 'react';
import {FlatList, View,StyleSheet} from 'react-native';
import Offer from './Offer';




const OffersList = (props) => {
    _keyExtractor = (item, index) => item.id;
    return <View style={styles.body}>
                <FlatList
          data={props.data}
          keyExtractor={this._keyExtractor} 
          renderItem={({item}) => <Offer  data={item}/>}
        />
            </View>
}

export default OffersList;



const styles = StyleSheet.create({

    body : {
        flex: 1,
        backgroundColor:'#17323E',
        paddingHorizontal: 15,
        
    },
});