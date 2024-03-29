import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const FatherSon = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Father Son Programs @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='h-screen'>
        <p className='flex flex-wrap text-green-200 font-bold font-cursive text-xl justify-center md:text-4xl pb-4'>
          Father Son
        </p>
        <div className='max-w-6xl h-1/2 mx-auto grid grid-cols-2 gap-4'>
          {/*Column One (Left)*/}
          <div className='flex flex-col justify-between mt-2'>
            <div className='mx-auto'>
              <Link href={'/mother-daughter'}>
                <p className='text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl'>
                  Mother Daughter
                </p>
              </Link>
            </div>
            <div className='mx-auto'>
              <Link href={'/mother-son'}>
                <p className='text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl'>
                  Mother Son
                </p>
              </Link>
            </div>
            <div className='mx-auto'>
              <Link href={'/father-daughter'}>
                <p className='text-green-200 hover:text-indigo-400 font-bold text-lg justify-center md:text-2xl'>
                  Father Daughter
                </p>
              </Link>
            </div>
          </div>
          {/*Column Two (Right)*/}
          <div className='mt-2'>
            <p>
              A full day jam-packed with adventurous activities
              intended to bring fathers and sons closer together.
            </p>
            <p>
              For more information please see our{' '}
              <a
                href='https://royalridges.org/updates/parent-child-days/'
                className='text-green-200 hover:text-indigo-400 hover:underline'
              >
                updates page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FatherSon;
