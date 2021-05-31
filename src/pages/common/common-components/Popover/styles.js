import styled from "styled-components";

export const Container = styled.div`
  .il-bl {
    display: inline-block;
    vertical-align: top;
  }

  .popover {
    position: relative;
    display: inline-block;
    height: 100%;
    background-color: transparent;
    border: none;
  }

  .popover-content {
    width: 200px;
    background-color: #fff;
    background-clip: padding-box;
    position: absolute;
    box-shadow: 0px 20px 20px #0000001f;
    border-top: 1px solid #e9e3c8;
    border-radius: 3px;
    outline: 0;
    padding: 16px;
    border-top: 3px solid #eeab5d;
  }

  .popover-content.-arrow {
    margin-top: 10px;
  }

  .popover-content.-arrow::before,
  .popover-content::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 10px;
  }

  .popover-content.-arrow::before {
    top: -10px;
    border-left: 13px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 9px solid #eeab5d;
  }

  .popover-content.-arrow::after {
    top: -10px;
    margin-left: 1px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #fff;
  }
`;

export const TriggerCover = styled.div`
  height: 100%;
`;
