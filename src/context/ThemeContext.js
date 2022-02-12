import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload,
      };
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    page: 'dev',
    theme: 'light',
  });

  const changePage = (page) => {
    dispatch({ type: 'CHANGE_PAGE', payload: page });
  };

  const changeTheme = (theme) => {
    dispatch({ type: 'CHANGE_THEME', payload: theme });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changePage, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
