import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sunny portfolio',
  description: '서브내용',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


/**
 * 폰트 사용해 보기
 * https://velog.io/@dusunax/next.js-google-font-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0feat.-tailwind
 */