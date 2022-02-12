import { useTheme } from '../hooks/useTheme';
import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'
import { VscColorMode } from 'react-icons/vsc';

// styles

import './ThemeSelector.scss';

export default function ThemeSelector() {
  const { changeTheme, theme } = useTheme();

  const toggleMode = () => {
      changeTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='theme-selector'>
      <div className='theme-toggle'>
        {/* <VscColorMode
          onClick={toggleMode}
          className='toggle-icon'
          alt='dark/light toggle icon'
        /> */}
               <button onClick={toggleMode}>
          {theme === "dark" ?
            <FiSun /* width="26" height="26" viewBox="0 0 26 26" */ className='sun'></FiSun>: 
      <FiMoon /* width="26" height="26" viewBox="0 0 26 26" */ className='moon'></FiMoon>

    } 
    </button>
          </div>
          
    </div>
  );
}

/* 
 <>
      <button onClick={toggleTheme}>
      {theme === "light" ?
      <Dark width="26" height="26" viewBox="0 0 26 26" style={{ fill: "#fafafa" }}></Dark>
      :<Light width="26" height="26" viewBox="0 0 26 26" style={{ fill: "#Fec" }}></Light>
    } 
    </button>

    
    </>
*/
