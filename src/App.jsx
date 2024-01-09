// Components
import Wrapper from './components/Wrapper/Wrapper.jsx';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

// Data
import { useEffect, useState } from 'react';
import { cardList } from './data';

// Styles
//import './App.css'
import { GlobalStyle } from './components/Global/Global.styled.js';
//import { StyledButton } from './components/Button/StyledButton.styled.js';
import { lightTheme, darkTheme, GlobalStyleLightDark, ThemeProvider } from './components/Themes/ThemesLightDark.styled.js';

function App() {

  // Loader
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000)
  }, []);

  // Add card function
  const [cards, setCards] = useState(cardList);
  const addCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: 'Web Design',
        title: 'Task name 1',
        date: '26.12.23',
        status: 'No status',
      }
    ])
  };

  // Toggle theme function
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      //console.log('dark theme');
    } else {
      setTheme('light');
      //console.log('light theme');
    }
  };

  // Rendering
  //<StyledButton onClick={toggleTheme}>Toggle theme</StyledButton>

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <GlobalStyleLightDark />

      <Wrapper>

        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} toggleTheme={toggleTheme}/>

        <Main isLoaded={isLoaded} cardList={cards} />

      </Wrapper>

    </ThemeProvider>

  )
}

export default App