import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import Navigation from '../components/SummerNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SummerReg = () => {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-indigo-200'>
      <Head>
        <title>Register for Summer Camp @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='h-screen overflow-auto px-1 sm:grid sm:grid-cols-2'>
        {/*Column 1*/}
        <div>
          <Navigation />
        </div>
        {/*Column 2*/}
        <div className='mr-4 '>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1698884262/royalRidges/Summer_Camp_Descriptions_-_2024_gjloqj.png'
            alt='summer camp descriptions'
            width={400}
            height={400}
            className='w-1/2 flex mx-auto rounded-xl my-6'
          />
          {/* Mobile Text */}
          <div className='text-center md:hidden text-xs italic w-2/3 mx-auto'>
            <p className='mb-1'>
              To access specific information about our camps tap the
            </p>
            <span className='text-yellow-200 bg-yellow-400 p-1 rounded-lg w-fit'>
              Summer Camp Options
            </span>
            <p className='mt-1'>button above the image</p>
          </div>
          <hr />
          <p>
            All of our Summer Camps include lots of fun games, team
            building activities, Bible Studies, singing camp songs,
            and visits to the Camp Store.
          </p>
          <p>
            Campers will come home dirty and tuckered out from their
            day at camp.
          </p>
          <p>
            The Bible themes and main activities repeat each week
            within each camp.
          </p>
          <p>
            All campers should wear weather-appropriate clothing{' '}
            <span className='italic'>
              (it is often chilly in the morning so remember a coat)
            </span>{' '}
            and closed-toe shoes.
          </p>
          <p>
            Please bring a lunch packed in a self-insulated lunch box,
            a water bottle, and{' '}
            <span className='font-bold underline'>please do not</span>{' '}
            send your camper with any electronic devices.
          </p>
          {/*New Content for 2024*/}
          <p className='font-semibold text-xl text-green-200 text-center mt-4'>
            What&#39;s New for Summer Camp 2024!
          </p>
          <p className='text-center font-bold'>
            We&#39;re looking forward to Summer Camp 2024 and are
            delighted to let you know about some exciting new
            adventures and changes.
          </p>
          <ul className='list-disc mb-2 ml-6'>
            <li className='mt-2'>
              Traditional Camps have taken on a new name. They are now
              referred to as Base Camp. Same great camp with a new
              name! If you are looking for a Base Camp option for
              older campers, see Adventure Camp without the high ropes
              for a similar camp to the Fir groups from last year.
            </li>
            <li className='mt-2'>
              <Link
                href={'/specialty-horse-camp'}
                className='underline text-green-200 hover:text-indigo-500'
                target='_blank'
                rel='noopener noreferrer'
              >
                Horse Camp Specialty Themes
              </Link>{' '}
              - Theme weeks designed for returning campers or
              experienced riders looking for some variety at horse
              camp. Choose from:{' '}
              <span className='font-semibold'>
                Vaulting (gymnastics on horseback), Miniature Horse
                Driving, and Trail
              </span>
              . Group size will be limited, so order your camp soon!
            </li>
            <li className='mt-2'>
              Adventure Camp has added more age groups with the fun of
              past summer but without the option of high ropes. If you
              want high ropes as part of your camp, sign up for
              Extreme Adventure Camp.
            </li>
            <li className='mt-2'>
              Multi-Week Camp will not be offered this year. See our
              other exciting options to sign up for multiple weeks
            </li>
          </ul>
          <div className='text-center'>
            <p className='text-xs italic mt-4'>
              For questions regarding registrations, please email{' '}
              <a
                href='mailto:registrations@royalridges.org'
                className='underline text-green-200 hover:text-indigo-500'
              >
                our Registrations department
              </a>
            </p>
            <p className='text-xs italic mb-8'>
              For questions regarding our summer camp programs please
              email{' '}
              <a
                href='mailto:programs@royalridges.org'
                className='underline text-green-200 hover:text-indigo-500'
              >
                our Programs department
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SummerReg;
