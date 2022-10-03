import { useSelector } from "react-redux";

import CasesContainer from "./CasesContainer"
import Header from "./Header";
import Menu from "./Menu";

const Home = () => {
  let cases = useSelector((state) => state.cases);

  return (
    <>
      <Header />
      <Menu />
      <CasesContainer cases={cases}/>
    </>
  )
};

export default Home;