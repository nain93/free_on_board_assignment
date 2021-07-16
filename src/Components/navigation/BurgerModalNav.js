import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import wantedImg from "../../img/wantedImgLogo.PNG";
import profile from "../../img/profile.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  padding: 30px 20px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const NavBox = styled.ul``;

const NavItem = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    font-size: 20px;
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

const UnderLineStyle = styled(Link)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

function BurgerModalNav({ setOpenBurgerModal }) {
  const handleBurgerModalClose = () => {
    setOpenBurgerModal(false);
    return;
  };

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setOpenBurgerModal(false);
      return;
    }
    return;
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <LogoBox>
        <img src={wantedImg} alt="wantedImg" />
        <button onClick={handleBurgerModalClose}>
          <AiOutlineClose size={20} opacity={0.5} />
        </button>
      </LogoBox>
      <NavBox>
        <NavItem>
          <Link>
            MY 원티드
            <Profile />
          </Link>
        </NavItem>
        <NavItem>
          <UnderLineStyle>프로필</UnderLineStyle>
        </NavItem>
        <NavItem>
          <Link>이력서</Link>
        </NavItem>
        <NavItem>
          <Link>매치업</Link>
        </NavItem>
        <NavItem>
          <Link>추천</Link>
        </NavItem>
        <NavItem>
          <Link>지원 현황</Link>
        </NavItem>
        <NavItem>
          <UnderLineStyle>프리랜서</UnderLineStyle>
        </NavItem>
        <NavItem>
          <Link>직군별 연봉</Link>
        </NavItem>
        <NavItem>
          <UnderLineStyle>커리어 성장</UnderLineStyle>
        </NavItem>
        <NavItem>
          <Link>기업 서비스</Link>
        </NavItem>
        <NavItem>
          <Link>로그아웃</Link>
        </NavItem>
      </NavBox>
    </Container>
  );
}

export default BurgerModalNav;
