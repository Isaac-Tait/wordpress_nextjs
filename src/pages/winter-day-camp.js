import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const WinterDayCamp = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-200 to-green-200'>
    <Head>
        <title>Winter Day Camp @ Royal Ridges&#39; Staff</title>
      </Head>
      <Header />
      <div className='h-screen max-w-6xl mx-auto'>
        <div className='mr-4'>
          <Image
            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/SchoolBreakCamps.png'
            alt='summer camp descriptions'
            width={400}
            height={400}
            className='w-2/3 mx-auto rounded-xl mt-1'
          />
          <div className='flex justify-between max-w-4xl mx-auto my-10'>
            <Link
              href={'/school-break'}
              className='font-cursive font-extrabold text-xl hover:underline text-green-200 hover:text-indigo-500'
            >
              <p>School Break Camps</p>
            </Link>

            <Link
              href={'/spring-day-camp'}
              className='font-cursive font-extrabold text-xl hover:underline text-green-200 hover:text-indigo-500'
            >
              <p>Spring Day Camp</p>
            </Link>
          </div>
          <p className='mb-2 text-center'>
            Five action-packed days of Winter Camp fun and activities!
          </p>
          <p>
            Join us this Christmas break for our Winter Day Camp as we
            create 5 days of fun-filled holiday-themed adventures for
            campers from Kindergarten through 6th grade. We are
            looking forward to filling camp with the joy of the
            season. Campers will play games, learn about Jesus&#39;s
            birth, and spend time outdoors. We also offer a break-out
            horse activity for those kiddos who love horses. Space is
            limited, so click on the link below for more information
            and to register for camp. Please pack your camper with a
            packed lunch, water bottle, and snack, and ensure they
            dress in plenty of layers and warm clothes. We do have a
            heated area, but they will be outside as well.
          </p>
          <p className='mb-2'>
            Sign up for Base Camp and choose to add the horse activity
            each day- either way, your child is sure to have a great
            time!
          </p>
          <hr />
          <p className='mt-1'>
            <span className='font-bold'>Date:&nbsp;</span>December
            18-22, 2023
          </p>
          <p>
            <span className='font-bold'>Time:&nbsp;</span>9:00am -
            3:00pm
          </p>
          <p>
            <span className='font-bold'>Ages:&nbsp;</span>Kindergarten
            to 6th Grade
          </p>
          <p className='font-bold'>Prices:</p>
          <p className='ml-1'>
            Base Camp: $175.00 per camper for the week
          </p>
          <p className='ml-1'>
            Horse Option: add $150 per camper for the week
          </p>
          <p className='ml-1'>
            Bus Transportation: add $60 per camper for the week
          </p>
          <p className='mt-2 text-center font-cursive text-xl'>
            Register
            <a
              href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Winter+Break+Camp'
              target='_blank'
              rel='noopener noreferrer'
              className='text-green-200 hover:text-indigo-400 hover:underline'
            >
              &nbsp;here
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WinterDayCamp;
