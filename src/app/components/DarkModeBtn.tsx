'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface IDarkMode {}

export default function DarkModeBtn({}: IDarkMode) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClick = (mode: string) => () => {
    setTheme(mode);
  };

  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
        <button 
            className="bg-darkModeBg inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 dark-btn text-darkModeColor"
            type="button"
            onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
        >   
            {/* 라이트모드 */}
            <svg xmlns="http://www.w3.org/2000/svg" className="dark:h-5 dark:w-5 h-0 w-0 invisible dark:visible"viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
            {/* 다크모드 */}
            <svg xmlns="http://www.w3.org/2000/svg" className="dark:w-0 dark:h-0 h-5 w-5 visible dark:invisible" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        </button>
    </>
);
}