import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const fadeIn = keyframes`
0% {
    opacity: 0;
  }
100% {
    opacity: 1;
  }
`;

const openModal = keyframes`
0% {
    height: 0;
  }
100% {
    height: 345px;
  }
`;

const Container = styled.div`
  background-color: white;
  padding: 40px 0;
  animation: 0.5s ${fadeIn} ease-out;
  @media (max-width: 767px) {
    display: none;
  }
`;

const ModalSection = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  animation: 0.2s ${openModal} ease-out;
`;

const ModalItem = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TitleItem = styled(Link)`
  font-size: 18px;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 20px;
  svg {
    opacity: 0.5;
  }
`;

const Item = styled(Link)`
  opacity: 0.5;
  margin: 5px 0;
  display: inline-flex;
`;

const MoreItem = styled(Link)`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  opacity: 0.5;
  margin: 5px 0;
`;

const More = () => (
  <MoreItem>
    더보기
    <MdKeyboardArrowRight />
  </MoreItem>
);

function SearchModalNav() {
  return (
    <Container>
      <ModalSection>
        <ModalItem>
          <li>
            <TitleItem>
              영업
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <Item>기업영업</Item>
          </li>
          <li>
            <Item>외부영업</Item>
          </li>
          <li>
            <Item>영업 관리자</Item>
          </li>
          <li>
            <Item>기술영업</Item>
          </li>
          <li>
            <Item>주요고객사 담당자</Item>
          </li>
          <li>
            <Item>솔루션 컨설턴트</Item>
          </li>
          <li>
            <Item>해외영업</Item>
          </li>
          <li>
            <More />
          </li>
        </ModalItem>
        <ModalItem>
          <li>
            <TitleItem>
              미디어
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <Item>콘텐츠 크리에이터</Item>
          </li>
          <li>
            <Item>PD</Item>
          </li>
          <li>
            <Item>영상 편집가</Item>
          </li>
          <li>
            <Item>에디터</Item>
          </li>
          <li>
            <Item>비디오 제작</Item>
          </li>
          <li>
            <Item>작가</Item>
          </li>
          <li>
            <Item>출판 기획자</Item>
          </li>
          <li>
            <More />
          </li>
        </ModalItem>
        <ModalItem>
          <li>
            <TitleItem>
              인사
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <Item>인사담당</Item>
          </li>
          <li>
            <Item>리크루터</Item>
          </li>
          <li>
            <Item>조직문화</Item>
          </li>
          <li>
            <Item>평가·보상</Item>
          </li>
          <li>
            <Item>헤드헌터</Item>
          </li>
          <li>
            <Item>HRBP</Item>
          </li>
          <li>
            <Item>HRD</Item>
          </li>
          <li>
            <More />
          </li>
        </ModalItem>
        <ModalItem>
          <li>
            <TitleItem>
              게임 제작
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <Item>게임 기획자</Item>
          </li>
          <li>
            <Item>게임 그래픽 디자이너</Item>
          </li>
          <li>
            <Item>모바일 게임 개발자</Item>
          </li>
          <li>
            <Item>게임 아티스트</Item>
          </li>
          <li>
            <Item>게임 클라이언트 개발자</Item>
          </li>
          <li>
            <Item>게임 서버 개발자</Item>
          </li>
          <li>
            <Item>유니티 개발자</Item>
          </li>
          <li>
            <More />
          </li>
        </ModalItem>
        <ModalItem>
          <li>
            <TitleItem>
              엔지니어링·설계
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <Item>전자 엔지니어</Item>
          </li>
          <li>
            <Item>기계 엔지니어</Item>
          </li>
          <li>
            <Item>전기 엔지니어</Item>
          </li>
          <li>
            <Item>전기기계 공학자</Item>
          </li>
          <li>
            <Item>로봇·자동화</Item>
          </li>
          <li>
            <Item>QA 엔지니어</Item>
          </li>
          <li>
            <Item>제품 엔지니어</Item>
          </li>
          <li>
            <More />
          </li>
        </ModalItem>
        <ModalItem>
          <li>
            <TitleItem>
              금융
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              제조·생산
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              물류·무역
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              의료·제약·바이오
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              교육
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              법률·법집행기관
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              식·음료
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              건설·시설
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
          <li>
            <TitleItem>
              공공·복지
              <MdKeyboardArrowRight />
            </TitleItem>
          </li>
        </ModalItem>
      </ModalSection>
    </Container>
  );
}

export default SearchModalNav;
