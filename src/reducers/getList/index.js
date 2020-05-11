const name = 'getList';

export const types = {
  GET_PROPERTY_LIST: `${name}/GET_PROPERTY_LIST`,
  PROPERTY_LIST_RESPONSE: `${name}/PROPERTY_LIST_RESPONSE`,
};

const initialState = {
  propertyList: [],
};

export const selectors = {
  selectPropertyList: (state) => state[name].propertyList,
};

export const actions = {
  getPropertyList: (lat, lng) => ({
    type: types.GET_PROPERTY_LIST,
    payload: {lat, lng},
  }),
  propertyListResponse: (response) => ({
    type: types.PROPERTY_LIST_RESPONSE,
    payload: response,
  }),
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
    default:
      return state;
  }
};
