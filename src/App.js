import React, { Suspense, useState } from "react";
// ! Third party dependencies.....
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ! Third party dependencies End.....
// ? Components...
import Loading from "./Components/loading/index";
import { App_Routes } from "./Routes/Routes";
// ? Components End...
import GlobalStyle from "./global_style/Index";

export const ToggleAdvertisedMenu = React.createContext(null);

function App() {
  const [togglemenu, setToggleMenu] = useState(false);

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <ToggleAdvertisedMenu.Provider value={{ togglemenu, setToggleMenu }}>
          <Router>
            <Routes>
              {App_Routes.map((el, index) => (
                <Route
                  key={index}
                  path={el.link}
                  element={<Suspense fallback={<Loading />}>{el.el}</Suspense>}
                />
              ))}
            </Routes>
          </Router>
        </ToggleAdvertisedMenu.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
