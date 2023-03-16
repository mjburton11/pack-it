import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './header';
import { Inventory } from './inventory';
import { Welcome } from './welcome';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <main className="content">
          <Header />
          <section className="section">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

const theme = createTheme({
  typography: { fontFamily: 'Monaco' },
});
