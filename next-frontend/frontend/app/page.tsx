"use client";
import React from 'react'
import { client } from './utils/configSanity';

interface IBlog {
  _id: string;
  title: string;
  description: any;
  _createdAt: string;
}

async function getBlog() {
  const query = '*[_type == "blog"]';
  const blog = await client.fetch(query);
  return blog as IBlog[];
}

export default async function Home () {
   const blog = (await getBlog()) as IBlog[];
  console.log(blog);
  
  return (
   <div className='flex '>
    <div className='flex gap-10'>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
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