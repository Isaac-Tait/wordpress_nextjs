import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Mission = () => {
  return (
    <div className='bg-gradient-to-t from-yellow-200 to-indigo-200'>
      <Head>
        <title>Royal Ridges&#39; Mission and Purpose</title>
      </Head>
      <Header />
      <div>
        <div className='max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen overflow-y-scroll mb-4'>
          <Image
            src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/about_page/Mission.png'
            alt='mission'
            width={400}
            height={400}
            className='rounded-2xl shadow-xl mt-2 w-2/3 mx-auto'
          />
          <p className='flex flex-wrap text-yellow-400 font-bold text-xl justify-center md:text-2xl mt-2'>
            The Beauty of God&#39;s Creation
          </p>
          <p className='text-base lg:text-lg px-1'>
            Royal Ridges Retreat began in 1978 with the very generous
            gift of 78 acres of land by Roy and Jean Andersen. We are
            located 25 miles northeast of Vancouver, Washington in the
            tranquil and scenic foothills of the majestic Cascade
            Mountain range. Our camp has use of 390 acres of
            breathtaking hills, trails, pastures, and streams that
            wind their way to Andersen Lake.
          </p>
          <p className='flex flex-wrap text-yellow-400 font-bold text-xl justify-center md:text-2xl'>
            Our Mission and Affiliation
          </p>
          <p className='text-base lg:text-lg px-1'>
            Royal Ridges Retreat is a Christian non-profit ministry.
            Our mission is to move one step closer to Christ by
            reaching the unsaved with the gospel of Jesus Christ
            through love and personal example. This is done through
            the following three points: fun, safe, God. Our goal is to
            provide a fun and safe experience for every camper who
            attends a Royal Ridges camp. We do this while also
            teaching important Biblical principles in the context of
            God&#39;s beautiful outdoors. Campers will learn new
            skills, meet new challenges, make life long friends, and
            learn about themselves in a positive, caring environment.
            All campers are welcomed at Royal Ridges without regard to
            race, color, or national origin. Our camp programs are
            tailored for youth grades 1 to 12. Our adult programs and
            retreats are perfect for groups or organizations as well
            as individuals. We also offer a unique combination of
            parent-child programs. Although we are a part of the
            Pacific Northwest District of the Evangelical Free Church,
            all of our programs are intended to be non-denominational
            in design, scope and teaching. Thanks to revenues from
            operations and the generous gifts of individuals and
            churches who believe in our ministry, we are able to be
            self supporting.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
