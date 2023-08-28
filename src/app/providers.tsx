'use client' // csr로 작동을 해야 ThemeProvider가 작동을 합니다.
import { ThemeProvider } from 'next-themes' // 다크모드 import

export function Providers({ 
   children, //요소를 넣으므로 children 사용
}: {
  children: React.ReactNode
}) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}