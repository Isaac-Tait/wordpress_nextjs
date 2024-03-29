import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Volunteers = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-200 to-indigo-200'>
      <Head>
        <title>Volunteer opportunities @ Royal Ridges</title>
      </Head>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
          <Image
            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/header+photos/Volunteers.png'
            alt='volunteers'
            width={400}
            height={400}
            className='rounded-2xl shadow-xl mt-2 w-2/3 mx-auto'
          />
          <p>
            With 378 acres, there are many projects and needs all over
            camp. Projects may include helping on a construction
            project or landscaping by pulling weeds. If you have a
            specific skill or trade you would like to offer us in any
            area, please let us know. If you are interested in getting
            monthly updates about our volunteer opportunities, fill
            out the form below.
          </p>
          <p className='mt-2'>
            If you have any questions or concerns, please{' '}
            <a
              href='email:volunteers@royalridges.org'
              className='underline text-green-200 hover:underline hover:text-indigo-400'
            >
              email
            </a>{' '}
            us.
          </p>
          <p className='flex flex-wrap text-green-200 font-bold text-xl justify-center md:text-xl'>
            Scheduled Volunteer Workdays:
          </p>
          <p>May 29</p>
          <p>June 12</p>
          <div className='flex justify-center'>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLSfMtLDuqIRmTjAOzrFErCQWUR9NkQUFpOJ8nUHqHNDLoa7PfA/viewform?embedded=true'
              width='640'
              height='1109'
              frameborder='0'
              marginheight='0'
              marginwidth='0'
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Volunteers;
