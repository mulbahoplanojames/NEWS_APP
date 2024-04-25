import { createContext, useState } from "react";

export const AppContext = createContext();

// This function is a Context provider that stores global app state.
const AppContextProvider = (props) => {
  /**
   * `darkMode` state of the app.
   * @type {boolean}
   */
  const [darkMode, setDarkMode] = useState(false);

  /**
   * @function toggleDarkMode
   * This function is use to toggle the `darkMode` state of the app.
   */
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
    console.log(darkMode);
  };

  // I create this object to provide CSS styles for the app based on the `darkMode` state.
  const darkModeStyle = {
    backgroundColor: darkMode ? "#1d232a" : "white",
    color: darkMode ? "white" : "#1d232a",
  };

  // I created this object to store all of the data that i want to share to all parts of this project.
  const contextValue = {
    darkMode,
    toggleDarkMode,
    darkModeStyle,
  };

  return (
    /*
     * Context provider that provides the app state to its descendants.
     */
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
