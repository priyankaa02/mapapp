/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TextInput, FlatList} from 'react-native';
import {dimensions, responsive} from '../../styles/variables';
// import {ListRow} from './ListRow';
import FastImage from 'react-native-fast-image';
import Text from 'react-native-text';
import {ListRow} from './ListRow';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

const mainStyles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    alignItems: 'center',
    position: 'relative',
  },
  txt: {
    fontSize: 22,
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 200,
  },
  txt1: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    // marginTop: 30,
  },
  list: {
    width: dimensions.width,
    height: dimensions.height,
    marginTop: 2,
  },
  back: {
    marginRight: 300,
    marginTop: 20,
  },
});
const List = ({getList, onClickBack}) => {
  console.log('getList', getList);
  return (
    <View style={mainStyles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={mainStyles.back}
        onPress={onClickBack}>
        <Icon name="arrowleft" size={20} />
      </TouchableOpacity>
      <Text style={mainStyles.txt1}>{'Restaurants List'}</Text>
      {getList && getList.length > 0 && (
        <FlatList
          data={getList}
          renderItem={({item}) => (
            <>
              <ListRow obj={item} />
            </>
          )}
          style={mainStyles.list}
          horizontal={false}
          keyExtractor={(item) => item.id}
        />
      )}
      {getList.length === 0 && (
        <Text style={mainStyles.txt}>{'No data found'}</Text>
      )}
    </View>
  );
};

export default List;
