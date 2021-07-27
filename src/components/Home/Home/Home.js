import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import Chat from "../../Chat/Chat";

const Home = () => {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
    </>
  );
};

export default Home;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
