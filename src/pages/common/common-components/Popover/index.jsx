import React, { cloneElement, useState, useEffect, useRef } from "react";
import { string, shape, bool, func, node } from "prop-types";

import { Container, TriggerCover } from "./styles";

const PopoverContent = ({
  className,
  placement,
  showArrow,
  style,
  closeOnClick,
  onClose,
  onClickOutSide,
  children,
}) => {
  const node = useRef();

  const handleClickOutSide = (e) => {
    if (node.current) {
      if (closeOnClick) {
        onClose();
      } else {
        if (!node.current.contains(e.target)) {
          onClickOutSide();
        }
      }
    }
  };

  useEffect(() => {
    if (node.current) {
      node.current.focus();
    }
    window.document.addEventListener("click", handleClickOutSide, false);
    return () => {
      if (node.current) {
        node.current.blur();
      }
      window.document.removeEventListener("click", handleClickOutSide, false);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 27) {
      e.stopPropagation();
      onClose();
    }
  };

  return (
    <div
      ref={node}
      tabIndex="-1"
      onKeyDown={onKeyDown}
      className={`popover-content${className ? " " + className : ""}${
        placement ? " " + placement : ""
      }${showArrow ? " -arrow" : ""}`}
      style={style}
    >
      <div className="popover-inner">{children}</div>
    </div>
  );
};

const Popover = ({
  visible: propVisible,
  onOuterClick,
  triggerNode,
  trigger,
  showArrow,
  placement,
  className,
  style,
  closeOnClick,
  children,
}) => {
  const [visible, setVisible] = useState(propVisible);

  const onShow = (e) => {
    e.stopPropagation();
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onToggle = (e) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const onClickOutSide = () => {
    onClose();
    onOuterClick();
  };

  return (
    <div className="popover">
      {triggerNode &&
        cloneElement(triggerNode, {
          onClick: trigger === "click" || trigger === "hover" ? onToggle : null,
          onMouseOver: trigger === "hover" ? onShow : null,
        })}

      {visible && (
        <PopoverContent
          showArrow={showArrow}
          placement={placement}
          closeOnClick={closeOnClick}
          onClickOutSide={onClickOutSide}
          className={className}
          style={style}
          onClose={onClose}
        >
          {children}
        </PopoverContent>
      )}
    </div>
  );
};

const PopoverComponent = ({
  children,
  showArrow,
  visible,
  onOuterClick,
  trigger,
  triggerNode,
  placement,
  className,
  style,
  closeOnClick,
}) => {
  return (
    <Container>
      <Popover
        visible={visible}
        onOuterClick={onOuterClick}
        triggerNode={<TriggerCover>{triggerNode}</TriggerCover>}
        trigger={trigger}
        showArrow={showArrow}
        placement={placement}
        className={className}
        style={style}
        closeOnClick={closeOnClick}
      >
        {children}
      </Popover>
    </Container>
  );
};

PopoverComponent.propTypes = {
  children: node.isRequired,
  showArrow: bool,
  visible: bool,
  onOuterClick: func,
  trigger: string,
  triggerNode: node.isRequired,
  placement: string,
  className: string,
  style: shape({}),
  closeOnClick: func,
};

PopoverComponent.defaultProps = {
  showArrow: true,
  visible: false,
  onOuterClick: () => null,
  trigger: "hover",
  placement: "bottom",
  className: "",
  style: {},
  closeOnClick: undefined,
};

export default PopoverComponent;
