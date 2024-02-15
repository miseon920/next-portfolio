'use client'
import React, { useEffect, useState } from 'react'
import { useToggleTheme } from '@/app/hooks/useToggleTheme';
import { useTheme } from 'next-themes'

export default function DarkModeBtn() {
    //const { theme, setTheme } = useTheme();
    const { theme, themes, setTheme } = useToggleTheme();
    // theme : 현재값 가져오기 getter
    // setTheme : 현재 값 바꾸기 setter
    const [mounted, setMounted] = useState(false)
     // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <>
            <button 
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 dark-btn"
                type="button"
                // onClick={()=>{setTheme(themeName)}}
            >   
                {/* onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}   data-hide-on-theme="light" */}
                {/* 라이트모드 */}
                <svg xmlns="http://www.w3.org/2000/svg" className="visible dark:invisible h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
                {/* 다크모드 data-hide-on-theme="dark"*/}
                <svg xmlns="http://www.w3.org/2000/svg" className="invisible dark:visible h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            </button>
        </>
    )
}

//svg stroke-width와 같은 속성을 strokeWidth 로 바꿔줘야한다.
/*
    Avoid Hydration Mismatch 
    서버에서는 클라이언트가 마운트되기 전까지 theme값을 알수가 없으므로 
    클라이언트가 마운트 되었을때 현재 테마를 랜더링 해야하므로  const [mounted, setMounted] = useState(false) 추가

    이미지도 따로 보여야 하기 때문에
     data-hide-on-theme="dark" , data-hide-on-theme="light" 추가후 
    
    [data-theme='dark'] [data-hide-on-theme='dark'],
    [data-theme='light'] [data-hide-on-theme='light'] {
        display: none;
    }
    --tailwind import 오류로 import문 수정완료
    css 추가
    <https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch> 참고
*/