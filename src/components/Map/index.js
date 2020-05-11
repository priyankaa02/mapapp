/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {dimensions, responsive} from '../../styles/variables';
import FastImage from 'react-native-fast-image';
import Text from 'react-native-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import {TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler';

const mainStyles = StyleSheet.create({
  container: {
    // width: dimensions.width,
    // height: dimensions.height,
    // // backgroundColor: '#ffff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative',
  },
  map: {
    width: dimensions.width,
    height: dimensions.height,
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
});

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {featureType: 'road', elementType: 'geometry', stylers: [{color: '#38414e'}]},
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const Map = ({coordinates, addMarker, markers, onPressMarker}) => {
  return (
    <SafeAreaView style={mainStyles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={mainStyles.map}
        region={coordinates}
        onPress={(event) => addMarker(event.nativeEvent.coordinate)}
        customMapStyle={mapStyle}>
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onPress={() => onPressMarker(marker.latitude, marker.longitude)}
            />
          );
        })}
      </MapView>
    </SafeAreaView>
  );
};

export default Map;
