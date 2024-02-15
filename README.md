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

♦️ 사용 : LottieFiles, Notion Api, TailwindCSS

    1. LottieFiles 
        - <https://lottiefiles.com> 로티파일 제이슨 파일로 다운받기
        - npm install --save react-lottie-player <https://www.npmjs.com/package/react-lottie-player>
        - Animation.tsx 생성 후 사용한 애니메이션 json 넣기

        >
        ```
        import React from 'react'
        import Lottie from 'react-lottie-player'
        // Alternatively:
        // import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

        import lottieJson from './my-lottie.json'

        export default function Example() {
        return (
            <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 150, height: 150 }}
            />
        )
        }
        ```

    2. TailwindCSS
        - 기본적으로 nextjs 13버전에는 설치되어있다. (타입스크립트와 마찬가지로)
        - <https://tailblocks.cc/> 에서 필요한 레이아웃을 골라서 코드 붙여넣기
        - Tailwind CSS IntelliSense 익스텐션 설치


    3. 다크모드(next tema git)
        - npm install next-themes
        - ```app/providers.tsx``` 에 ```import { ThemeProvider } from 'next-themes'```
        - ```<ThemeProvider attribute="class"></ThemeProvider>``` 감싸기
        - providers를 export하여 공통 레이아웃 body 아래 바로 감싸기
        - css 및 버튼 추가
        - <https://heroicons.com/> 에서 아이콘 추가 (copy svg)
        - <https://velog.io/@devhyuk/Next-13-Next-js-Tailwind-%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C> next13 버전은 위의 블로그 참조하여 제작
        - ```tailwind.config.ts```에 ```darkMode: "class",```를 추가해야 ```ThemeProvider attribute="class"``` 를 쓴게 먹는다.




--------------------------------------------------------------------------------

9. api - 노션api
- ```/database``` 에서 데이터들을 입력하여 넣는다.
- 커버변경 등 속성을 모두 추가한다. 
- ```notion api doc```을 검색한다. <https://developers.notion.com/>
- ```Get started``` -> 우측상단 ```
View my integrations``` 클릭 <https://www.notion.so/my-integrations> 
- 새 API 통합 만들기 클릭 후 작성 후 저장 후 시크릿키 복사 해 둔다.
- ```.env.local``` 파일을 생성한다.

>
    ```
    NOTION_TOKEN="아까복사한 시크릿키"
    NOTION_DATABASE_ID="내 노션 데이터 베이스에서 전체페이지로 열기 후 ?v= 앞부분"
    ```
- <https://developers.notion.com/reference/retrieve-a-database> shell 코드 복사하여 사용하기

- API 미리 확인하기 -> 포스트맨 검색
    - import 클릭 후 shell코드 붙여넣고 send
    - (```+```)를 눌러서 탭하나를 더 연후 curl에 있는 내주소 넣어주기
    - authorization에서 Authorization: Bearer 값선택 후 값 넣어주기
    - headers에 키 : Notion-Version  값: 2022-06-28 넣어주기
    - ```https://api.notion.com/v1/databases/{database_id}``` 에 따라서 database_id 에 NOTION_DATABASE_ID 넣어주기 -> 제대로 나오면 성공!
------------------------------------------------------------------------------------------------

# Query a database
- 포스트맨에 retrieve-a-database에서 사용한 api 복사 (버전과 Bearer값이 같아서)
- 내주소를  ``` https://api.notion.com/v1/databases/{database_id}/query ``` 에서 database_id 에 NOTION_DATABASE_ID 넣어주기 -> POST로 세팅
- headers에 키:Content-Type  값: application/json 세팅 (curl을 보고 필요한 키와 값을 세팅하면 된다.)
- Accept : application/json 세팅
- body에 raw 선택 후 sort 문 넣기

> 

    {
        "sorts": [
            {
                "property": "title",
                "direction": "descending" // ascending  = 내림차순 ,올림차순 의미
            }
        ]
    }

- nextjs에 데이터 가져오기 
    - getStaticProps 에는 on-demand revalidation 으로 필요할 때 수동으로 revalidate 하는 방법
    - <https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating> 
    - (getStaticProps : 사이트가 빌드 될때 데이터를 가져오는 방식, 1번)
    - (getServerSideProps : 내용이 바뀔때 마다 데이터를 가져오는 방식) <https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#upgrading-new-features>
    - 노션 api Query a database에서 자바스크립트로 선택 후 복사
    - dotenv 설치 (환경변수 사용하기 위해서) - <https://www.npmjs.com/package/dotenv>
    - 루트 경로에 config 폴더 생성 후 index.ts 생성 후 데이터 베이스 아이디와 토큰 불러오기
    - ```npm i @notionhq/client```설치하기 -  <https://www.npmjs.com/package/@notionhq/client>
    - ```npm install @notionhq/client @notion-render/client @notion-render/hljs-plugin @notion-render/bookmark-plugin``` 설치
>

* 크롤링 = 검색정보를 긁어서 저장한다(= 검색엔진)

* spa 장점 = 데이터가 바뀌는 부분만 재 랜더링 되므로 속도가 빠르다.

* spa 단점 = 크롤링이 되지 않아 검색엔진 최적화가 어렵다.

* 따라서 csr(vue, react)보다는 ssr(nextjs, nuxtjs)를 사용한다. 

+ generateStaticParams
    > getStaticPaths -> generateStaticParams 변경됨
    > 동적 라우팅에서 필요한 Params는 무조건 String 타입이므로 toString() 함수를 이용해서 String 타입으로 변환해  줘야한다.

+ fetch 
    > getStaticProps 함수나 getServerSideProps 함수 -> fetch
    > cache 옵션과 next 옵션을 줄 수 있다.
        - cache: 'force-cache' => 정적사이트(캐시를 강제한다는 의미로 디폴트값)
        - cache: 'no-store' => 서버사이드로 작동 ('no-cache'와 같은 의미)
        - next : revalidate 옵션이 있음 = ISR
            - fetch(url, {next: {revalidate: 10}});  => 10초마다 캐시를 갱신한다는 뜻
            
+ todos folder는 13라우터를 위해 공부한것