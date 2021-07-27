import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { MyContext } from "../../../App";
import { db } from "../../../firebase";
import { enterRoom } from "../../../Redux/appSlice";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useContext(MyContext);
  const addChannel = () => {
    const channelName = prompt("Please enter a channel name");
    if (channelName) {
      db.collection("room").add({ name: channelName });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
      setValue({ roomId: id });
    }
    console.log(value);
  };
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
