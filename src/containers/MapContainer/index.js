import React, {useState} from 'react';
import Map from '../../components/Map';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectors as getListSelectors,
  actions as getListActions,
} from '../../reducers/getList';
import { navigateAndReset } from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';

const MapContainer = () => {
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState({
    latitude: 26.8467,
    longitude: 80.9462,
    latitudeDelta: 2,
    longitudeDelta: 4,
  });
  let id = 0
  const [markers, setMarker] = useState([]);
  const [polygons, setPolygon] = useState([]);
  const [editing, setEditing] = useState(null);
  const [creatingHole, setCreatingHole] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const finish = () => {
    setPolygon([...polygons, editing]);
    console.log('polygons', editing);
    onPressMarker(editing.coordinates);
    setModalVisible(true);
    setEditing(null);
    setCreatingHole(false);
  }

  const onClickModal = (val) => {
    setModalVisible(val)
  }

  const onClickResult = () => {
    navigateAndReset(ScreenNames.ListContainer);
  }

  const clear = () => {
    setPolygon([]);
    setEditing(null);
    setCreatingHole(false);
  }

  const createHole = () => {
    if (!creatingHole) {
      setCreatingHole(true);
      setEditing({
        ...editing,
        holes: [...editing.holes, []]
      })
    } else {
      const holes = [...editing.holes]
      if (holes[holes.length - 1].length === 0) {
        holes.pop()
        setEditing({
          ...editing,
          holes
        })
      }
      setCreatingHole(false);
    }
  }

  const onPress = (e) => {
    if (!editing) {
      setEditing({
        id: id++,
        coordinates: [e.nativeEvent.coordinate],
        holes: []
      })
    } else if (!creatingHole) {
      setEditing({
        ...editing,
        coordinates: [...editing.coordinates, e.nativeEvent.coordinate]
      })
    } else {
      const holes = [...editing.holes]
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate
      ]
      setEditing({
        ...editing,
        id: id++, // keep incrementing id to trigger display refresh
        coordinates: [...editing.coordinates],
        holes
      })
    }
  }

  const addMarker = (coordinate) => {
    setMarker([
      ...markers,
      {latitude: coordinate.latitude, longitude: coordinate.longitude},
    ]);
  };

  const onPressMarker = (polygons) => {
    dispatch(getListActions.getPropertyList(polygons));
  };

  return (
    <Map
      coordinates={coordinates}
      addMarker={addMarker}
      markers={markers}
      onPressMarker={onPressMarker}
      polygons={polygons}
      editing={editing}
      creatingHole={creatingHole}
      finish={finish}
      clear={clear}
      createHole={createHole}
      onPress={onPress}
      modalVisible={modalVisible}
      onClickModal={onClickModal}
      onClickResult={onClickResult}
    />
  );
};

export default MapContainer;
