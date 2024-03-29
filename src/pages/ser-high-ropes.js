import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const SerHighRopes = () => {
  return (
    <div className='bg-yellow-200'>
      <Head>
        <title>Training for Royal Ridges&#39; Staff</title>
      </Head>
      <Header />
      <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
        <p className='text-center font-semibold text-3xl mb-4'>
          ADVENTURE CAMP: High Ropes
        </p>
        <p>
          View these videos and take this quiz if you are serving in
          Day Adventure Camp or are planning to assist with High
          Ropes.
        </p>
        <p className='mt-6'>
          High Ropes [{' '}
          <a
            href='https://youtu.be/w3gjMSU8nfs'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'
          >
            Part 1
          </a>{' '}
          &nbsp;&nbsp;|{' '}
          <a
            href='https://youtu.be/Va4I-tfMIuo'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'
          >
            Part 2
          </a>{' '}
          &nbsp;&nbsp;|{' '}
          <a
            href='https://youtu.be/8a4Ktvhw1f4'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'
          >
            Part 3
          </a>{' '}
          &nbsp;&nbsp;|{' '}
          <a
            href='https://youtu.be/oUHCJetDob0'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'
          >
            Part 4
          </a>{' '}
          &nbsp;&nbsp;]
        </p>
        <div className='my-10'>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSfyzwmd9HprVlTjz-mYnVEtS8EYz70K4rCYmBbQTXd45eBscg/viewform?usp=sf_link'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-200 hover:underline hover:text-indigo-400 ml-2 w-1/4'
          >
            ADVENTURE CAMP HIGH ROPES QUIZ
          </a>
        </div>
        <p>
          If you are serving at Adventure Camp, please also review the
          Outdoor Education curriculum below so you are familiar with
          it.
        </p>
        <div className='my-10'>
          <a
            href='https://docs.google.com/document/d/1KBduf6tGXFc_mARUCo6c108hJD5etNPhf4yKOd6IpbA/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-200 hover:underline hover:text-indigo-400 ml-2 my-2 w-1/4'
          >
            Outdoor Education
          </a>
        </div>
        <div className='text-center flex flex-col'>
          <Link
            href='/staff-excellence-radar-4'
            className='text-medium lg:text-2xl my-6 font-semibold w-full lg:w-1/4 mx-auto text-gray-600 hover:underline hover:text-indigo-600'
          >
            {' '}
            {'<'}
            {'<'} Online Training {'<'}
            {'<'}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SerHighRopes;
