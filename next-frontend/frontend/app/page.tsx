
import React from 'react'
import { client } from './utils/configSanity';
import PortableText from "react-portable-text"

// interface IBlog {
//   _id: string;
//   title: string;
//   description: string;
//   _createdAt: string;
// }

async function getBlog() {
  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);
  // return blogs as IBlog[];
  return blogs;
}

export default async function Home () {
  //  const blogs = (await getBlog()) as IBlog[];
  const blogs = await getBlog();
  console.log(blogs);
  
  return (
   <div className='flex '>
    <div className='flex gap-10'>
      
      {/* <p>{blogs[0].title}</p>
      <p>{blogs[0].description}</p> */}
      {/* <p>{blogs[2]._id}</p> */}
     
<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {blogs.map((item) => (
             <div key={item.slug} className="lg:flex">
            
            {/* <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/> */}

            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                    {item.title}
                </a>
                
                {/* <span className="text-sm text-gray-500 dark:text-gray-300">{item.metadesc}</span> */}
            </div>
            <PortableText content={item.content} 
            projectId = "o8l7uk7j"
            dataset = "production"
            />
        </div>
          ))}
            

            {/* <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Morning routine to boost your mood
                    </a>

                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                </div>
            </div> */}

      
        </div>
    </div>
</section>
      {/* <PortableText
      // Pass in block content straight from Sanity.io
      content={blogs.content}
      // Transform content
      projectId = ""
      dataset = "production"
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props: any) => <h1 style={{ color: "red" }} {...props} />,
        li: ({ children }:any) => <li className="special-list-item">{children}</li>,
       
      }}
      
    /> */}
    </div>
   </div>
  )
}


