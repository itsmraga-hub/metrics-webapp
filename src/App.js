import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHomePageCases } from "./redux/covidcases";
import Home from "./components/Home";

const App = () =>{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageCases())
  }, []);

  return (
    <>
    <Home />
    </>
  );
}

export default App;
