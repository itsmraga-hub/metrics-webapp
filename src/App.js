import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHomePageCases } from './redux/covidcases';
import Home from './components/Home';

import './App.css';
import SingleCase from './routes/SingleCase';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageCases());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<SingleCase />} />
      </Routes>
    </>
  );
};

export default App;
