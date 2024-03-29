import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ParentsManual = () => {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
      <Head>
        <title>
          A manual for parents who are sending their children to Royal
          Ridges
        </title>
      </Head>
      <Header />
      <div className='h-screen max-w-6xl mx-auto text-gray-800 overflow-y-scroll'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/summer_camp_page/headers/ParentsSurvivalManual.png'
          alt='faqs'
          width={400}
          height={400}
          className='w-1/2 flex mx-auto rounded-xl my-6'
        />

        <div className='flex justify-center'>
          <iframe
            src='https://docs.google.com/document/d/e/2PACX-1vRqgexaaGYn-1of0dtOyn7Co-qWn1ARqTD7TkS3xje4lQK6Zs7MyXkMbm1x33bxu5SMnjZYrcS86Jlh/pub?embedded=true'
            width='640'
            height='1109'
            frameborder='0'
            marginheight='0'
            marginwidth='0'
          ></iframe>
        </div>

        <div className='text-center mt-8'>
          <p>
            If you have any questions or concerns about your
            child&#39;s summer camp adventures please read the
            information packets linked below. If it does not answer
            your question(s) than please feel free to contact us.
          </p>
          <a
            href='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/PDFs/Parent_Manual_Summer_Camp.pdf'
            className='text-green-200 hover:underline hover:text-indigo-400 rounded-md'
          >
            Parent&#39;s Manual
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ParentsManual;
