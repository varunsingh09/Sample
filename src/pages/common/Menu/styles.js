import styled from "styled-components";

export const UL = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  height: 100%;
  margin-right: 80px;
  @media (max-width: 1124px) {
    margin-right: 0;
    flex-direction: column;
    height: auto;
  }
`;

export const LI = styled.li`
  cursor: pointer;
  margin: 0 8px;
  height: 100%;
  @media (max-width: 1124px) {
    margin: 0;
    &:last-child {
      margin-bottom: 8px;
    }
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    color: #e9e3c8;
    font-size: 14px;
    line-height: 24px;
    font-family: Roboto Bold;
    border-bottom: 4px solid transparent;
    &:hover {
      color: #eeab5d;
      text-decoration: none;
    }
    &.active {
      color: #eeab5d;
      border-bottom: 4px solid #eeab5d;
    }
    @media (max-width: 1124px) {
      padding: 0 40px;
      font-size: 16px;
      color: #555;
      border-bottom: none;
      &.active {
        color: #eeab5d;
        border-bottom: none;
      }
    }
  }
`;
