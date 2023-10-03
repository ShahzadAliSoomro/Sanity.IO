
import React from 'react'
import { client } from './utils/configSanity';
import PortableText from "react-portable-text"

interface IBlog {
  _id: string;
  title: string;
  description: any;
  _createdAt: string;
}

async function getBlog() {
  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);
  return blogs as IBlog[];
}

export default async function Home () {
   const blogs = (await getBlog()) as IBlog[];
  console.log(blogs[2]);
  
  return (
   <div className='flex '>
    <div className='flex gap-10'>
      <p>{blogs[2].title}</p>
      <p>{blogs[2].description}</p>
      {/* <p>{blogs[2]._id}</p> */}
 
      <PortableText
      // Pass in block content straight from Sanity.io
      content={blogs[2].content}
      // Transform content
      projectId = "o8l7uk7j"
      dataset = "production"
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props: any) => <h1 style={{ color: "red" }} {...props} />,
        li: ({ children }:any) => <li className="special-list-item">{children}</li>,
       
      }}
      
    />
    </div>
   </div>
  )
}


// export async function getServerSideProps() {
//   const client = createClient({
//     projectId: "o8l7uk7j",
//     dataset: "production",
//     apiVersion: "2022-03-10",
//     useCdn: true,
//   });
//   const query = '*[_type == "blog"]';
//   const blogs = await client.fetch(query);
//   return {
//     props: {
//       blogs,
//     },
//   }
// }