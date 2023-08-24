import React from 'react'

export default function NotFound() {
  return (
    <div>not-found</div>
  )
}


/**
 * 404page
 * 
 * 1. Next 13.3에서는 파일 이름을 not-found.js. => typescript이므로 not-found.tsx
 * 2. 동적인 폴더에 적용할경우 app-> [...not_found] -> page.tsx 생성
 * 3. 2안에 조건문으로 1의 페이지로 보낼수 있음.
 * 4. 12버전에서는 pages 안에 404.js를 만들면 된다.
 */