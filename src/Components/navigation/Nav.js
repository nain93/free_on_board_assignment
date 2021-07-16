import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import wanted from "../../img/wantedLogo.PNG";
import { AiOutlineSearch } from "react-icons/ai";
import { VscBell } from "react-icons/vsc";
import profile from "../../img/profile.jpg";
import { RiSubtractLine } from "react-icons/ri";
import SearchModalNav from "./SearchModalNav";
import { GiHamburgerMenu } from "react-icons/gi";
import BurgerModalNav from "./BurgerModalNav";

const Container = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
`;

const NavBox = styled.nav`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  @media (max-width: 767px) {
    justify-content: normal;
  }
  align-items: center;
  font-weight: 700;
`;

const ListItem = styled.li`
  padding: 0 20px;
  height: 100%;
  &:hover {
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.1);
  }
  box-shadow: inset 0 -2px ${(props) => (props.current ? "#3498db" : "transparent")};
  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const SideList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0 10px;
  }
`;

const Profile = styled.div`
  background-image: url(${profile});
  background-position: center;
  background-size: cover;
  width: 28px;
  height: 28px;
  border-radius: 15px;
  margin: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Service = styled(Link)`
  padding: 8px;
  width: 80px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

function Nav({ searchModal, setSearchModal }) {
  const { pathname } = useLocation();
  const [respon, setRespon] = useState(false);
  const [openBurgerModal, setOpenBurgerModal] = useState(false);

  const handleBurgerModalOpen = () => {
    setOpenBurgerModal(true);
    return;
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setRespon(true);
      return;
    } else {
      setRespon(false);
      return;
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [respon]);

  const handleSearchOver = () => {
    setSearchModal(true);
    return;
  };

  if (openBurgerModal) {
    return (
      <BurgerModalNav
        openBurgerModal={openBurgerModal}
        setOpenBurgerModal={setOpenBurgerModal}
      />
    );
  }

  return (
    <Container>
      <NavBox>
        <Logo>
          <img src={wanted} alt="wanted" />
        </Logo>
        <NavList>
          {respon && (
            <ListItem current={pathname === "/"}>
              <Link to="/">홈</Link>
            </ListItem>
          )}
          <ListItem
            onMouseOver={handleSearchOver}
            current={pathname === "/search"}
          >
            <Link to="/search">탐색</Link>
          </ListItem>
          <ListItem current={pathname === "/career"}>
            <Link to="/career">커리어 성장</Link>
          </ListItem>
          {!respon && (
            <>
              <ListItem current={pathname === "/salary"}>
                <Link to="/salary">직군별 연봉</Link>
              </ListItem>
              <ListItem current={pathname === "/resume"}>
                <Link to="/resume">이력서</Link>
              </ListItem>
              <ListItem current={pathname === "/matchup"}>
                <Link to="/matchup">매치업</Link>
              </ListItem>
              <ListItem current={pathname === "/freelancer"}>
                <Link to="/freelancer">프리랜서</Link>
              </ListItem>
            </>
          )}
        </NavList>
        <SideList>
          <IconBox>
            <button>
              <AiOutlineSearch size={20} />
            </button>
            <button>
              <VscBell size={20} />
            </button>

            {respon ? (
              <button onClick={handleBurgerModalOpen}>
                <GiHamburgerMenu size={15} />
              </button>
            ) : (
              <button>
                <Profile />
              </button>
            )}
          </IconBox>

          {!respon && (
            <>
              <RiSubtractLine
                style={{ transform: "rotate(90deg)", color: "rgba(0,0,0,0.1)" }}
                size={15}
              />
              <Service to="/service">기업 서비스</Service>
            </>
          )}
        </SideList>
      </NavBox>
      {searchModal && <SearchModalNav />}
    </Container>
  );
}

export default Nav;
