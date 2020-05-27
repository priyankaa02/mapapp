const name = 'getList';

export const types = {
  GET_PROPERTY_LIST: `${name}/GET_PROPERTY_LIST`,
  PROPERTY_LIST_RESPONSE: `${name}/PROPERTY_LIST_RESPONSE`,
  SET_LOADING: `${name}/SET_LOADING`,
};

const initialState = {
  propertyList: [],
  loading: false,
};

export const selectors = {
  selectPropertyList: (state) => state[name].propertyList,
  selectLoading: (state) => state[name].loading,
};

export const actions = {
  getPropertyList: (data) => ({
    type: types.GET_PROPERTY_LIST,
    payload: {data},
  }),
  propertyListResponse: (response) => ({
    type: types.PROPERTY_LIST_RESPONSE,
    payload: response,
  }),
  setLoading: (value) => ({
    type: types.SET_LOADING,
    payload: value
  })
};

export const getPlaceUrl = (lat, lng, radius, type, apiKey) => {
  const baseUrl =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  const location = `location=${lat},${lng}&radius=${radius}`;
  const typeData = `&types=${type}`;
  const api = `&key=${apiKey}`;
  return `${baseUrl}${location}${typeData}${api}`;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROPERTY_LIST: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.PROPERTY_LIST_RESPONSE: {
      return {
        ...state,
        propertyList: action.payload,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
