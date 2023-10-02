"use client";
import Image from 'next/image'
import { createClient } from "next-sanity";

export default function Home({ blogs }: any) {
  console.log("blogs", blogs);
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



export async function getServerSideProps() {
  const client = createClient({
    projectId: "o8l7uk7j",
    dataset: "production",
    apiVersion: "2022-03-10",
    useCdn: true,
  });
  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  }
}