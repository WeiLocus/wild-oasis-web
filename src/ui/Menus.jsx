import { createContext } from "react";
import styled from "styled-components";
import { useState, useContext } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { createPortal } from "react-dom";

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

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const open = setOpenId;
  const close = () => setOpenId("");

  return (
    <MenusContext.Provider value={{ openId, open, close }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, open, close } = useContext(MenusContext);

  function handleClick() {
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
  const { openId } = useContext(MenusContext);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={{ x: 20, y: 20 }}>{children}</StyledList>,
    document.body
  );
}

function Button({ children }) {
  return (
    <li>
      <StyledButton>{children}</StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
