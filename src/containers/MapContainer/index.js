import React, {useState} from 'react';
import Map from '../../components/Map';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectors as getListSelectors,
  actions as getListActions,
} from '../../reducers/getList';

const MapContainer = () => {
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState({
    latitude: 28.207609,
    longitude: 79.82666,
    latitudeDelta: 2,
    longitudeDelta: 4,
  });

  const [markers, setMarker] = useState([]);

  const addMarker = (coordinate) => {
    setMarker([
      ...markers,
      {latitude: coordinate.latitude, longitude: coordinate.longitude},
    ]);
  };

  const onPressMarker = (latitude, longitude) => {
    dispatch(getListActions.getPropertyList(latitude, longitude));
  };

  return (
    <Map
      coordinates={coordinates}
      addMarker={addMarker}
      markers={markers}
      onPressMarker={onPressMarker}
    />
  );
};

export default MapContainer;
