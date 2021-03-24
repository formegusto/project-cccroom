import React from 'react';
import { ThemeProvider } from 'styled-components';
import CCCRoomContainer from './containers/CCCRoomContainer';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider  theme={theme}>
      <CCCRoomContainer />
    </ThemeProvider>
  )
}

export default App;
