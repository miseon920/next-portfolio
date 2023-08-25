import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunny portfolio = 나',
  description: 'aboutMe',
}

export default function  AboutMe() {
  return (
    <div className='font-roboto title'>page</div>
  )
}



/**
 *  snippets
 * 
 *  1. 컴포넌트 단축키 = rcc
 *  2. 함수형 컴포넌트 
 *     - rfc : 컴포넌트 작성과 동시에 export
 *     - rfce : export 코드 분리
 *     - rsf : props를 가진 컴포넌트 생성
 * 
 * 3. 화살표 함수형
 *      - rsc : 빈 div를 가진 화살표 함수 컴포넌트 생성
 *      - rafc : 화살표 함수 컴포넌트를 생성과 함께 export하고, 컴포넌트가 있는 js파일명이 div안에 작성됨
 *      - rafce : export코드가 분리된 화살표 함수 컴포넌트를 생성하고, 컴포넌트가 있는 js파일명이 div안에 작성됨
 */

/**
 *  #코드 깔끔하게 짜기
    -함수형 컴포넌트 사용하기 (arrow-function 같은)
    -인라인 스타일을 사용하지 않기
    -적절한 import 구조를 유지하기 (서드파티 import를 먼저 --> 내부에서 쓰는 import를 마지막으로)
    -커밋(commit) 전에 코드 형식 맞추기
 */

/* tip

    1. useReducer hook : useState hook 보다는 유즈 리듀서를 이용하여 복잡성을 줄일 수 있다.
    2. boolean props에는 약어 사용 
    <RegistrationForm hasPadding={true} withError={true} /> (prop자체가 참인지 거짓인지 빠져 있다면 아래와 같이사용)
    -> <RegistrationForm hasPadding withError />

    3. string props에는 중괄호를 피하기

    <Paragraph variant={"h5"} heading={"A new book"} /> (prop에 스트링만 있다면 {} 를 제거 하고 쓸 수 있다.)
    -> <Paragraph variant="h5" heading="A new book" />

    4. div가 불필요할 때는 fragment 사용하기 : <></>
    5. children이 불필요할 때 셀프 클로징 태그 사용하기 : <NavigationBar></NavigationBar> -> <NavigationBar />
    6. 흔한 이름 표기법
        - 컴포넌트, interface, type 별칭에는 파스칼 케이스를 쓰기 (단어의 첫자가 대문자) : TodoList 
        - 변수, 배열, 객체, 함수 등 JavaScript 데이터 타입에는 카멜 케이스를 쓰기 (첫번째 단어의 시작은 소문자 나머지 단어의 첫번째는 대문자) : getLastDigit
    7. XSS 공격 예방 =>  dompurify 라이브러리 사용
*/