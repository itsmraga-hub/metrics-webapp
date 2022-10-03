import { createAsyncThunk } from "@reduxjs/toolkit";

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
      })
    })
    dispatch({
      type: FETCH_CASES,
      payload,
    })
  }
);

export const fetchsingleCountryInfo = createAsyncThunk(
  SEARCH_BY_COUNTRY,
  async (args, { dispatch }) => {
    const response = await fetch('https://covid-api.mmediagroup.fr/v1/cases?country=India');
    const data = await response.json();
    console.log(data);
    dispatch({
      type: SEARCH_BY_COUNTRY,
      payload: data,
    })
  }
);

export const searchByCountry = (str) => (
  {
    type: SEARCH_BY_COUNTRY,
    str,
  }
)

export const searchImplementation = (state, str) => {
  const len = str.length;

  const cases = state.filter((country) => {
    if (country.id.slice(0, len) === str) {
      return country;
    }
  });
  console.log(cases.length);
  return cases;
}

const casesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_CASES: {
      return [...action.payload];
    }
    case SEARCH_BY_COUNTRY: {
      const arr = state.map((obj) => ({...obj}));
      const cases = searchImplementation(arr, action.str);
      return [...cases];
    }
    default: {
      return state;
    }
  }
}

export default casesReducer;
