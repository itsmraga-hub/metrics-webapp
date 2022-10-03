import { useSelector } from "react-redux";

import CasesContainer from "./CasesContainer"

const Home = () => {
  let cases = useSelector((state) => state.cases);

  return (
    <>
      <CasesContainer cases={cases}/>
    </>
  )
};

export default Home;