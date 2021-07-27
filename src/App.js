import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login/Login";
import styled from "styled-components";
export const MyContext = createContext();

function App() {
  const [value, setValue] = useState({
    roomId: 0,
  });
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <MyContext.Provider value={[value, setValue]}>
      <div className="App">
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          )}
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
const AppLoading = styled.div``;
const AppLoadingContent = styled.div``;
