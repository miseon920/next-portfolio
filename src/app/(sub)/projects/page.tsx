import React from 'react'
import type { Metadata } from 'next'
import { DATABASE_ID, TOKEN} from '@/../config'

export const metadata: Metadata = {
  title: 'Sunny portfolio - 프로젝트',
  description: 'Project',
}

const fetchFromNotin = async () => {
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`);
    const projects = await res.json();
    console.error(res, projects);
    return projects;
}

export default async function Projects() {
    const data = await fetchFromNotin();
  return (
    <div>프로젝트</div>
  )
}

// export async function getStaticProps() {
//     const { Client } = require('@notionhq/client');

//     const notion = new Client({ auth: `${TOKEN}` });

//     (async () => {
//     const databaseId = `${DATABASE_ID}`;
//     const response = await notion.databases.query({
//         database_id: databaseId,
//         filter: {
//         or: [
//             {
//             property: 'In stock',
//             checkbox: {
//                 equals: true,
//             },
//             },
//             {
//             property: 'Cost of next trip',
//             number: {
//                 greater_than_or_equal_to: 2,
//             },
//             },
//         ],
//         },
//         sorts: [
//         {
//             property: 'Last ordered',
//             direction: 'ascending',
//         },
//         ],
//     });
//     console.log(response);
//     })();
    
//     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`)
//     const projects = await res.json()
   
//     return {
//         props:{projects},
//         revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다 - 갱신 주기 설정 가능
//     }
//  }



/**
 * 폴더자체가 링크가 되므로 폴더는 링크주소로 쓰고 
 * 안에 컴포넌트는 규칙을 따라준다(첫단어 대문자). 
 */