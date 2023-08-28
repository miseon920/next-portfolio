import Link from 'next/link' // a를 넣으면 새로고침이 일어나므로 link를 사용하여 넣기
import React from 'react'
import DarkModeBtn from '@/app/components/DarkModeBtn'


export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl dark:text-white">써니 포토폴리오</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/" className="mr-5 hover:text-gray-900 dark:text-white">홈</Link>
                <Link href="/projects" className="mr-5 hover:text-gray-900 dark:text-white">프로젝트</Link>
                <Link href="https://open.kakao.com/me/Su_ny" target='_blank' className="mr-5 hover:text-gray-900 dark:text-white">연락하기</Link>
                </nav>
                <DarkModeBtn />
            </div>
      </header>
    </>
  )
}

// https://tailblocks.cc/ 에서 header 넣기