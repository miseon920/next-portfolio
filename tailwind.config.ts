import type { Config } from 'tailwindcss'
import { notoSansKr, roboto} from '@/assets/fonts/fonts'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: { // 폰트패밀리
        // roboto: ["var(--roboto)"], // 다음과 같이 배열 안에 string으로 작성합니다.
      },
      colors: {
        darkModeBg: "var(--dark)", // 다크모드 백그라운드를 주기위해 변수로 만듬
        darkModeColor: "var(--darkBtnColor)", // 다크모드 텍스트 색상을 주기위해 변수로 만듬
        darkBasicColor:"var(--darkColor)"
      },
    },
  },
  darkMode: "class", //다크모드 클래스로 설정
  plugins: [],
}
export default config
