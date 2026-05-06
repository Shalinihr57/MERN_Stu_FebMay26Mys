// useContext hook
// Context: lets you share data b/w components
// without passing props manually through evry level

import { createContext, useContext, useState } from "react";

// why to use useContext?
// 1. Helps us avoid prop drilling
// 2. useFul for shared values:
    // - theme details 
   // - logged in user details
  // - language settings
  // - app settings

  //Basics steps:
  // 1.Create a Context
  // 2. wrap components with provider
  // 3. Read value using useContext()

const ThemeContext = createContext();

// Child component 1
function Header(){
    const theme = useContext(ThemeContext);
    return(
        <header style={{
            padding:'20px',
            marginTop:'20px',
            background:theme === 'dark'?'#222' : '#eee',
            color: theme === 'dark'? '#fff' : '#000',
        }}>
            <h3>Header Component</h3>
            <p>Current theme from context: {theme}</p>
        </header>
    );
}
// child component 2
function Content(){
    const theme = useContext(ThemeContext);
    return(
        <div style={{
            padding:'20px',
            marginTop:'20px',
            background:theme === 'dark'?'#333' : '#f9f9f9',
            color: theme === 'dark'? '#fff' : '#000',
        }}>
            <p>This component also uses the same context value</p>
        </div>
    );
}
function Layout(){
    return(
        <div>
            <Header/>
            <Content/>
        </div>
    );
}

export function UseContextIntro(){
    // shared State
    const [theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return(
        <section>
            <h2>useContext Example via theme</h2>
            <p>
                Example to show the usage of context sharing
            </p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <ThemeContext.Provider value={theme}>
                <Layout/>
            </ThemeContext.Provider>
        </section>
    );
}
