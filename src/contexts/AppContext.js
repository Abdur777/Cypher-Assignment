import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  grouping: 'status',
  sorting: 'priority',
};


const AppContext = createContext();


const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GROUPING':
      return { ...state, grouping: action.payload };
    case 'SET_SORTING':
      return { ...state, sorting: action.payload };
    default:
      return state;
  }
};


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);
