import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const SaturdayCamps = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-200 to-indigo-200'>
      <Head>
        <title>Saturday Camps @ Royal Ridges</title>
      </Head>
      <Header />
      <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/programs-page/headerPhotos/saturdayCamps.png'
          alt='saturday camp'
          width={400}
          height={400}
          className='w-2/3 mx-auto rounded-2xl shadow-xl mt-2'
        />
        <p className='flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl'>
          Traditional Day Camp
        </p>
        <p>
          Campers are divided into grade-level groups. Activities
          could include climbing wall, field games, hiking trails,
          archery, slingshots, crafts, games, snack shack, hayride,
          giant bounce pillow, petting farm, GaGa Ball, loud singing,
          funny skits, and memorable Bible stories.
        </p>
        <p>
          Purchase camp&nbsp;
          <a
            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Saturday+Day+Camps'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:text-indigo-400 text-green-200 uppercase text-lg mt-4'
          >
            here
          </a>
        </p>
        <p className='flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl'>
          Day Horse Camp
        </p>
        <p>
          Campers have the opportunity to take riding lessons from our
          skilled instructors, learn exciting information in horse
          science, grow valuable skills like grooming and saddling,
          and make friends along the way!
        </p>
        <p>
          Purchase camp&nbsp;
          <a
            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Saturday+Day+Camps'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:text-indigo-400 text-green-200 uppercase text-lg mt-4'
          >
            here
          </a>
        </p>
        <p className='flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl'>
          Paintball Camp
        </p>
        <p>
          Campers get to learn and play the extreme sport of
          Paintball. In the morning, campers learn the finer points of
          the game while fine-tuning their skills. Team building
          activities help teach communication skills while we grow our
          character through a Bible Study. The last three hours of the
          day are game-time, where it is time to sling paint!
        </p>
        <p>
          Purchase camp&nbsp;
          <a
            href='https://www.ultracamp.com/info/upcomingSessions.aspx?idCamp=1145&campCode=151&lnkCategory=Saturday+Day+Camps'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:text-indigo-400 text-green-200 uppercase text-lg mt-4'
          >
            here
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SaturdayCamps;
