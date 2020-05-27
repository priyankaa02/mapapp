/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Alert,
  SafeAreaView,
} from 'react-native';
import {dimensions, responsive} from '../../styles/variables';
import FastImage from 'react-native-fast-image';
import Text from 'react-native-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker, PROVIDER_GOOGLE, Polygon, ProviderPropType,} from 'react-native-maps';
// import {TouchableOpacity, TouchableHighlight} from 'react-native-gesture-handler';

const mainStyles = StyleSheet.create({
  container: {
    // width: dimensions.width,
    // height: dimensions.height,
    // // backgroundColor: '#ffff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
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
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: 'stretch'
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
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

const Map = ({
  coordinates,
  addMarker,
  markers,
  onPressMarker,
  polygons, 
  editing,
  creatingHole,
  finish,
  clear,
  createHole,
  modalVisible,
  onClickModal,
  onClickResult,
  onPress}) => {
  const mapOptions = {
    scrollEnabled: true
  }

  if (editing) {
    mapOptions.scrollEnabled = false
    mapOptions.onPanDrag = e => onPress(e)
  }
  return (
    <SafeAreaView style={mainStyles.container}>
      {/* <MapView
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
      </MapView> */}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={mainStyles.map}
          initialRegion={coordinates}
          customMapStyle={mapStyle}
          onPress={e => onPress(e)}
          {...mapOptions}
        >
          {polygons.map(polygon => (
            <Polygon
              key={polygon.id}
              coordinates={polygon.coordinates}
              holes={polygon.holes}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          ))}
          {editing && (
            <Polygon
              key={editing.id}
              coordinates={editing.coordinates}
              holes={editing.holes}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          )}
        </MapView>

        <View style={mainStyles.buttonContainer}>
          {/* {editing && (
            <TouchableOpacity
              onPress={() => createHole()}
              style={[mainStyles.bubble, mainStyles.button]}
            >
              <Text>
                {creatingHole ? 'Finish Hole' : 'Create Hole'}
              </Text>
            </TouchableOpacity>
          )} */}
          {editing && (
            <TouchableOpacity
              onPress={() => finish()}
              style={[mainStyles.bubble, mainStyles.button]}
            >
              <Text>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => clear()}
          style={[mainStyles.bubble, mainStyles.button]}
        >
          <Text>Clear</Text>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={mainStyles.centeredView}>
          <View style={mainStyles.modalView}>
            <Text style={mainStyles.modalText}>You have drawn a new area on Map</Text>
            <TouchableHighlight
              style={{ ...mainStyles.openButton }}
              onPress={() => {onClickModal(!modalVisible), onClickResult()}}
            >
              <Text style={mainStyles.textStyle}>Show Results</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...mainStyles.openButton, backgroundColor: "#2196F3", marginTop: 20 }}
              onPress={() => {onClickModal(!modalVisible), clear()}}
            >
              <Text style={mainStyles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Map;
