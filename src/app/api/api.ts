import { NextApiRequest, NextApiResponse } from "next";
import { DATABASE_ID, TOKEN} from '@/../config'
import {Client} from '@notionhq/client'
import React from "react";

import {
    BlockObjectResponse,
    PageObjectResponse,
  } from "@notionhq/client/build/src/api-endpoints";
  
  export const notion = new Client({
    auth: TOKEN,
  });
  

  export const fetchPages = React.cache(() => {
    return notion.databases.query({
      database_id: DATABASE_ID!,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
    });
  });
  
  export const fetchPageBySlug = React.cache((slug: string) => {
    return notion.databases
      .query({
        database_id: DATABASE_ID!,
        filter: {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      })
      .then((res) => res.results[0] as PageObjectResponse | undefined);
  });
  
  export const fetchPageBlocks = React.cache((pageId: string) => {
    return notion.blocks.children
      .list({ block_id: pageId })
      .then((res) => res.results as BlockObjectResponse[]);
  });
  
  /*
  React.cache  : Notion JS SDK를 사용하고 있으므로 fetch() 사용불가
  
  
  */