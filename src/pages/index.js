import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { getAllPosts } from '../lib/api';

import Blog from '../components/Blog';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
    // revalidate: 10,
    // The above line causes the website to push a 500 error
  };
}

export default function Home({ allPosts }) {
  return (
    <div>
      <link rel='icon' href='/favicon.png' />
      <Head>
        <title>
          Royal Ridges - An Adventure Camp in Southern Washington
        </title>
      </Head>
      {/* Sticky Header */}
      <div className='sticky top-0'>
        <div className='flex flex-wrap justify-between mt-1'>
          {/* Social Media */}
          <div className='ml-2 flex flex-wrap'>
            {/*Instagram*/}
            <a
              href='https://www.instagram.com/royalridges/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z'
                  fill='currentColor'
                />
                <path
                  d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                  fill='currentColor'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
                  fill='currentColor'
                />
              </svg>
            </a>
            {/*Facebook*/}
            <a
              href='https://www.facebook.com/RoyalRidges'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-4'
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
          {/* Search Icon */}
          <div className='mr-2'>
            <Link href='/search'>
              <span
                role='img'
                aria-label='Detective: Medium Skin Tone'
              >
                &#128373;
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/*Windows*/}
      <div className='snap-y snap-mandatory'>
        {/* First window */}
        <div className='snap-always snap-center heropattern-topography-yellow-400 mb-2 flex flex-col h-screen justify-between'>
          <div className='flex justify-center mb-10 bg-gray-100 rounded-full opacity-80 w-1/2 mx-auto'>
            <p className='px-1 text-gray-600 font-semibold text-lg'>
              Scroll Down
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 animate-bounce text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
          <div className='flex justify-center my-auto box-content'>
            <Image
              src='/images/logo.png'
              alt='Royal Ridges Logo'
              loading='eager'
              width={700}
              height={200}
            />
          </div>
        </div>

        {/* Second window */}
        <div className='flex flex-col h-screen bg-gradient-to-r from-yellow-500 to-yellow-200'>
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 animate-bounce text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
          <Navigation />
          <div className='flex justify-center my-auto px-1'>
            <Image
              src='/images/D_C_G_Logo.png'
              alt='Summer'
              height={550}
              width={700}
            />
          </div>
        </div>

        {/* Third window */}
        <div className='flex flex-col justify-between heropattern-rain-gray-100'>
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 animate-bounce text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </div>
          <div className='flex justify-center h-screen'>
            <Blog allPosts={allPosts} />
          </div>
        </div>

        {/* Fourth window */}
        <div className='h-screen grid grid-rows-3 grid-flow-col gap-4 bg-gradient-radial from-yellow-200 to-yellow-500'>
          {/* Row One */}
          <div className='grid col-span-3 grid-cols-3 md:col-span-1'>
            <div className='flex flex-col items-center justify-center'>
              <Link href='/summer-camp'>
                <div className='flex justify-center content-center box-content h-full'>
                  <Image
                    src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SummerIcon_wa521t.png'
                    alt='Summer'
                    height={200}
                    width={200}
                    className='w-full md:w-1/2 pl-2'
                  />
                </div>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
            <div className='flex flex-col items-center justify-center'>
              <Link href='/programs'>
                <div className='flex justify-center content-center box-content h-full'>
                  <Image
                    src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283061/royalRidges/icons/ProgramIcon_ocgaad.png'
                    alt='Programs'
                    height={200}
                    width={200}
                    className='w-full md:w-1/2 pr-2'
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* Row Two */}
          <div className='grid col-span-3 grid-cols-3 md:col-span-1'>
            {/* Empty Div*/}
            <div></div>
            <div className='flex flex-col items-center justify-center'>
              <Link href='/about'>
                <div className='flex justify-center content-center box-content h-full'>
                  <Image
                    src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/AboutIcon_pomsgv.png'
                    alt='About'
                    height={200}
                    width={200}
                    className='w-full md:w-1/2'
                  />
                </div>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
          </div>
          {/* Row Three */}
          <div className='grid col-span-3 grid-cols-3 md:col-span-1'>
            <div className='flex flex-col items-center'>
              <Link href='/support'>
                <div className='flex justify-center content-center box-content h-full'>
                  <Image
                    src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283063/royalRidges/icons/SupportIcon_anp6bi.png'
                    alt='Support'
                    height={200}
                    width={200}
                    className='w-full md:w-1/2'
                  />
                </div>
              </Link>
            </div>
            {/* Empty Div*/}
            <div></div>
            <div className='flex flex-col items-center'>
              <Link href='/contact'>
                <div className='flex justify-center content-center box-content h-full'>
                  <Image
                    src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1699283059/royalRidges/icons/ContactIcon_obpqt4.png'
                    alt='Contact'
                    height={200}
                    width={200}
                    className='w-full md:w-1/2'
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
