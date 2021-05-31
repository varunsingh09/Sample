import styled from "styled-components";

export const Container = styled.header`
  height: 63px;
  background: #181436 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1124px) and (max-width: 1248px) {
    padding: 0 48px;
    height: 48px;
  }
  @media (max-width: 1124px) {
    padding: 0 20px;
    height: 40px;
  }
`;

export const Logo = styled.img`
  max-height: 42px;
`;

export const LogoTempText = styled.div`
  color: #fff;
`;

export const Left = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media (max-width: 1124px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Middle = styled.div`
  height: 100%;
  margin-left: 80px;
  display: flex;
  @media (max-width: 1124px) {
    display: none;
  }
`;

export const Right = styled(Left)`
  @media (max-width: 1124px) {
    display: none;
  }
  & > div {
    height: 100%;
  }
`;

export const Hamburg = styled.div`
  display: none;
  width: 30px;
  @media (max-width: 1124px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:hover div {
      border: 2px solid #eeab5d;
    }
  }
`;

export const Line = styled.div`
  border: 2px solid #fff;
  margin-bottom: 4px;
  ${({ index }) => {
    if (index === 1) {
      return `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    `;
    }
    if (index === 2) {
      return `border-radius: 2px;`;
    }
    return `
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  `;
  }}
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MobileNav = styled.div`
  position: fixed;
  right: -280px;
  top: 0;
  z-index: 2;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  &.show {
    right: -1px;
  }
  width: 100%;
  height: 100vh;
  max-width: 280px;
  padding: 40px 0;
  transition: 0.3s all ease-in-out;
`;

export const LoggedInUser = styled.div`
  font-size: 18px;
  font-family: Roboto Bold;
  margin-bottom: 12px;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px 8px 8px 40px;
`;

export const Close = styled.img`
  max-height: 32px;
  top: 8px;
  right: 8px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
`;

export const InnerHeader = styled.div`
  justify-content: space-between;
  max-width: 1248px;
  margin: auto;
  display: flex;
  width: 100%;
  padding: 0 12px;
  align-items: center;
  height: 100%;
`;
