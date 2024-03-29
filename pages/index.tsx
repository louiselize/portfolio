import Head from 'next/head'
import { Inter } from '@next/font/google'
import {BsMoonStarsFill} from 'react-icons/bs'
import { useState } from 'react';
import TabbedInterface from './TabbedInterface'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>Louise Lizé Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-palette-light-200 md:px-20 lg:px-40 xl:px-80  dark:bg-black' style={{ height: '100vh'}}>
        <section className='px-10'>
          <nav className='py-10 flex justify-between'>
          
            <h1 className='text-xl font-burtons dark:text-white'>Louise LIZÉ</h1>
            
            <ul className='flex items-center'>
              <li>
                <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li>
                <a href="LIZE_Louise_Resume_EN.pdf" target="_blank" className='bg-palette-blue-100 hover:bg-palette-blue text-white px-4 py-2 rounded-md ml-8'>
                  Resume
                </a>
                </li>
            </ul>
          </nav>  
                 
        </section>
        <div className=''>
            <TabbedInterface/>
        </div>
        <br/><br/>
         
  
      </main>
    </div>
  )
}
