/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {dimension, responsive} from '../../styles/variables';
import Text from 'react-native-text';

export const ListRow = ({obj}) => {
  console.log('item', obj);
  return (
    <View style={hstyles.row}>
      <Image
        source={{uri: obj && obj.icon}}
        resizeMode={'contain'}
        style={hstyles.img}
      />
      <View style={{marginTop: 40}}>
        <Text style={hstyles.title1}>{obj && obj.name}</Text>
        <Text style={hstyles.title}>
          {'Rating: ' + (obj && obj.rating ? obj.rating : '3')}
        </Text>
        <Text style={hstyles.title2}>{obj && obj.vicinity}</Text>
      </View>
    </View>
  );
};
const hstyles = StyleSheet.create({
  row: {
    height: responsive.vertical(200),
    width: responsive.horizontal(325),
    alignSelf: 'center',
    backgroundColor: '#C0C0C0',
    paddingLeft: responsive.horizontal(10),
    marginTop: responsive.vertical(20),
    marginBottom: responsive.vertical(40),
    // paddingRight: responsive.horizontal(10),
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.0,
    elevation: 5,
    borderColor: '#808080',
    borderWidth: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: 'grey',
    lineHeight: 20,
  },
  title1: {
    fontSize: 15,
    fontWeight: '700',
    width: 200,
    color: 'white',
    lineHeight: 20,
  },
  title2: {
    fontSize: 12,
    width: 200,
    color: '#008080',
    lineHeight: 20,
  },
  img: {
    width: responsive.horizontal(80),
    height: responsive.horizontal(80),
    marginTop: 40,
  },
});
