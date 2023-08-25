1. npx create-next-app@latest --typescript
    - npx create-next-app@latest 해도 기본으로 제공함(파일 이름을 .ts / .tsx로 변경)

2. npx next dev

3. ```http://localhost:3000/``` 에서 확인

4. 메타데이터의 경우  ```src/app/layout.tsx``` 수정
    - _app.tsx 파일과 _document.tsx 파일의 역할
    - Next.js 13부터는 app폴더 밑에는 layout.tsx파일이 한개가 꼭 존재 해야 한다.

5. ```src/app/page.tsx``` 수정

6. nextjs 13버전 

- ```https://jha-memo.tistory.com/95```
- ```https://brothercoding.tistory.com/9```

    1. 기존의 index.tsx는 page.tsx로 변경
    2. app 폴더가 생김 - Next.js 13 버전은 기존 12 버전에서 사용한 파일 이름 라우팅 방식이 아니라 온전히 폴더 방식 라우팅을 사용한다. 
        - 12 버전은 /pages/test.tsx 파일이 /test 라우팅이 되었다면 이번에 나온 13 버전부터는 ```/app/test/page.tsx```로 해야 한다. (index.tsx가 page.tsx 가 된것, 컴포넌트도 따로 컴포넌트 폴더를 만들지 않고 해당 폴더안에 작성하여 바로 사용 할 수 있다.) - 폴더자체가 링크가 되므로 폴더는 링크주소로 쓰고 안에 컴포넌트는 규칙을 따라준다(첫단어 대문자)
        - 13버전 부터는 컴포넌트는 서버사이드 컴포넌트 이다.
        - 예전에는 getServerSideProps 함수를 통해서 서버에 요청 했다면 지금은 컴포넌트 내에서 바로 할 수 있다. Server Components를 사용
        - Streaming 특징: 서버단에서 컴포넌트를 랜더링 한 뒤 스트리밍 방식으로 클라이언트에 전달
        - 다이나믹 라우딩 = 브래킷 '[]' 방식 = ```[todoId]```
    3. 서버컴포넌트 이므로 클라이언트 컴포넌트를 쓰려면 'use client' 디렉티브를 지정해야함 (ex = onclick, 보통 fetch등은 서버 컴포넌트 이용, ui 적인 부분은 클라이언트 컴포넌트를 사용함)
    4. Turbopack은 Server Components, TypeScript, JSX, CSS 등 많은 부분들을 바로 지원한다. (next dev --turbo)
    5. Google Font지원 - 브라우저에서 요청하지 않아도 됨 : ```import { Inter } from 'next/font/google'```
    6. 공통 레이아웃을 원할경우 (그룹)을 만들고 그안에 ```layout.tsx```넣으면 된다.(sub 부분!)



7. <https://vercel.com/templates/next.js/app-directory> 추가 공부

8. if (조건문) return notFound(); => notFound 컴포넌트


> 

♦️ 사용 : LottieFiles, Notion Api, TailwindCSS

* 크롤링 = 검색정보를 긁어서 저장한다(= 검색엔진)

* spa 장점 = 데이터가 바뀌는 부분만 재 랜더링 되므로 속도가 빠르다.

* spa 단점 = 크롤링이 되지 않아 검색엔진 최적화가 어렵다.

* 따라서 csr(vue, react)보다는 ssr(nextjs, nuxtjs)를 사용한다. 

+ generateStaticParams
    >  getStaticPaths -> generateStaticParams 변경됨
    > 동적 라우팅에서 필요한 Params는 무조건 String 타입이므로 toString() 함수를 이용해서 String 타입으로 변환해  줘야한다.

+ fetch 
    > getStaticProps 함수나 getServerSideProps 함수 -> fetch
    > cache 옵션과 next 옵션을 줄 수 있다.
        - cache: 'force-cache' => 정적사이트(캐시를 강제한다는 의미로 디폴트값)
        - cache: 'no-store' => 서버사이드로 작동 ('no-cache'와 같은 의미)
        - next : revalidate 옵션이 있음 = ISR
            - fetch(url, {next: {revalidate: 10}});  => 10초마다 캐시를 갱신한다는 뜻
            
+ todos folder는 13라우터를 위해 공부한것