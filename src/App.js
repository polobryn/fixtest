import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom';

import Topbar from './scenes/global/TopBar';

import Home from './scenes/home';
import Sidebar from './scenes/global/Sidebar';





function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value = {colorMode }>
      <ThemeProvider theme={theme}>
        <CssBaseline>
            <div className="app">
              <Sidebar/>
              <main className='content'>
                <Topbar/>
                <Routes>

                    <Route path="/" element={<Home/>} />

                </Routes>
              </main>
            </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
