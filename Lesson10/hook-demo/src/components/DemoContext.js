import React from 'react'
import {useState, createContext } from 'react'
import Content from './Content';

export const ThemeContext = createContext(); // tạo ngữ cảnh để chia sể tài nguyên

function DemoContext() {

    const [theme, setTheme] = useState("text-success"); // class text-dark trong bootstrap

    const handleChangeTheme = ()=>{
        setTheme(theme==='text-success'?'text-dark':'text-info')
    }

  return (
    <div className='alert alert-danger'>
        <ThemeContext.Provider value={theme}>
            <button onClick={handleChangeTheme}>Change Theme </button>
            <Content />
        </ThemeContext.Provider>
    </div>
  )
}

export default DemoContext
