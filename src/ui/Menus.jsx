import { createContext } from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useClickOutside from "../hooks/useClickOutside";

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledToggle = styled.button`
  padding: 0.4rem;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
  padding: 0;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--border-radius-md);
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  padding: 1.2rem 2.4rem;
  text-align: left;
  background: none;
  border: none;
  font-size: 1.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState()
  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenusContext.Provider value={{ openId, open, close, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
  // the event will then never travel up further in the DOM
    e.stopPropagation()

    // give us position
    const rectangle = e.target.closest("button").getBoundingClientRect()
    // console.log(rectangle)
    // console.log(window.innerWidth, rectangle.width, rectangle.x);
    setPosition({
      x: window.innerWidth - rectangle.width - rectangle.x,
      y: rectangle.y + rectangle.height + 8
    })

    // 如果目前沒有open的row 或 目前open的是別的row ， 就open
    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  //listen in the bubbling phase
  const ref = useClickOutside(close, false);
  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const {close} = useContext(MenusContext)
  function handleClick() {
    onClick?.()
    close()
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
