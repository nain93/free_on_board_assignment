import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Home from "./Components/Home";
import Nav from "./Components/navigation/Nav";
import Career from "./Components/pages/Career";
import Freelancer from "./Components/pages/Freelancer";
import MatchUp from "./Components/pages/MatchUp";
import Resume from "./Components/pages/Resume";
import Salary from "./Components/pages/Salary";
import Search from "./Components/pages/Search";
import Service from "./Components/pages/Service";
import GlobalStyles from "./GolbalStyles";

const Container = styled.div``;

const fadeIn = keyframes`
0% {
    opacity: 0;
  }
100% {
    opacity: 1;
  }
`;

const ModalBack = styled.div`
  width: 100%;
  height: 100%;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: -1;
  transition: 0.5s;
  animation: 0.5s ${fadeIn} ease-out;
  @media (max-width: 767px) {
    display: none;
  }
`;

function App() {
  const [searchModal, setSearchModal] = useState(false);

  const handleSearchLeave = () => {
    setSearchModal(false);
    return;
  };

  return (
    <Container>
      <GlobalStyles />
      <Nav searchModal={searchModal} setSearchModal={setSearchModal} />
      {searchModal && <ModalBack onMouseOver={handleSearchLeave} />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/career" component={Career} />
        <Route path="/salary" component={Salary} />
        <Route path="/resume" component={Resume} />
        <Route path="/matchUp" component={MatchUp} />
        <Route path="/freelancer" component={Freelancer} />
        <Route path="/service" component={Service} />
      </Switch>
    </Container>
  );
}

export default App;
