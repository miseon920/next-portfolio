//import { Inter, Lora, Source_Sans_3, Noto_Sans_KR, Roboto } from 'next/font/google'
import { Noto_Sans_KR, Roboto } from 'next/font/google'
 
// define your variable fonts
// const inter = Inter()
// const lora = Lora()
// // define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: '400' })
// const sourceCodePro700 = Source_Sans_3({ weight: '700' })

const notoSansKr = Noto_Sans_KR({
// preload: true, 기본값 // https://nextjs.org/docs/messages/google-fonts-missing-subsets : subsets이 한국어를 지원하지 않아 공식문서대로 preload를 false로 변경
    preload: false,
    //subsets: ["latin"], // 또는 preload: false
    weight: ["100", "400", "500", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
    display: 'swap',
    fallback: [
      // 디자이너분과 상의한 폴백 폰트 넣으시면 됩니다
      '-apple-system',
      'Malgun Gothic',
      'Apple SD Gothic Neo',
      'Roboto',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'sans-serif',
    ],
});

const roboto = Roboto({
    preload: false,
    weight: ["100", "400", "700"],
    display: 'swap',
    variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});
// className에 전달하고, CSS variable & tailwind와 함께 사용
 
export { notoSansKr, roboto }



// https://velog.io/@sangbooom/nextfont-%EC%A0%81%EC%9A%A9

