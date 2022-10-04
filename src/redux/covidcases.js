import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CASES = 'metrics-hub/cases/FETCH_CASES';
const SEARCH_BY_COUNTRY = 'SEARCH_BY_COUNTRY';

export const fetchHomePageCases = createAsyncThunk(
  FETCH_CASES,
  async (args, { dispatch }) => {
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases');
    const data = await response.json();
    const cases = Object.entries(data);
    const payload = [];
    cases.forEach(([key, country]) => {
      const id = key;
      payload.push({
        ...country.All,
        id,
      });
    });
    dispatch({
      type: FETCH_CASES,
      payload,
    });
  },
);

export const fetchsingleCountryInfo = createAsyncThunk(
  SEARCH_BY_COUNTRY,
  async (countryName, { dispatch }) => {
    const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${countryName}`);
    const data = await response.json();
    dispatch({
      type: SEARCH_BY_COUNTRY,
      payload: data,
    });
  },
);

// export const searchByCountry = (str) => (
//   {
//     type: SEARCH_BY_COUNTRY,
//     str,
//   }
// );

export const searchImplementation = (arr, str) => {
  const len = str.length;

  const cases = arr.filter((country) => (country.id.slice(0, len) === str));
  return cases;
};

const casesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CASES: {
      return [...action.payload];
    }
    case SEARCH_BY_COUNTRY: {
      // const arr = state.map((obj) => ({ ...obj }));
      // const cases = searchImplementation(arr, action.str);
      // console.log(action.payload);
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default casesReducer;
