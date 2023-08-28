// 'use client'

import '@/assets/style/globals.css'
import type { Metadata } from 'next'
import { notoSansKr, roboto} from '@/assets/fonts/fonts' // 3번
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'Sunny portfolio',
  description: 'nextjs로 만든 포트폴리오',
}

export const cls = (...classnames: string[]) => { //className을 합치기   2번
    return classnames.join(" ");
};

export default function RootLayout({
  children, //요소를 넣으므로 children 사용
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body className={`${cls(notoSansKr.className, roboto.variable)} bg-white dark:bg-black`}>
                <Providers>
                    <Header/>
                    {children}
                    <Footer/>
                </Providers>
            </body>
        {/* prop으로 들어온  children을 사용한것*/}
        </html>
    )
}


/**
 * 폰트 사용해 보기
 * https://velog.io/@dusunax/next.js-google-font-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0feat.-tailwind
 */


/*
    메타데이터 동적으로 사용할때 : https://space-rumi.tistory.com/176 (generateMetadata 함수사용)
*/