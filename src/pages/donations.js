import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Donations = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-200 to-indigo-200'>
      <Head>
        <title>Donations</title>
      </Head>
      <Header />
      <div className='max-w-6xl h-screen overflow-y-scroll mx-auto text-xs md:text-base'>
        <Image
          src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/support_page/header+photos/Donations.png'
          alt='donations'
          width={400}
          height={400}
          className='rounded-2xl shadow-xl mt-2 w-2/3 mx-auto'
        />

        <h1 className='font-semibold text-2xl tracking-wide text-center text-red-600'>
          Barn Fire Update
        </h1>
        <p className='my-4'>
          On Friday, July 7th, our hay barn caught fire and burned to
          the ground. It was a total loss. All of our equipment,
          medical supplies, grain, and hay for the year was destroyed.
          Our herd was out on pasture at the time of the fire so they
          were unharmed, but our vaulting horse was in a paddock
          attached to the barn and was injured. He is being treated at
          Oregon State University and we are hopeful that he will
          recover. We have an incredible community supporting us and
          we know that God is in control and the loss of our barn and
          hay will work for His glory. If you would like to help
          please make a donation to our general fund or email{' '}
          <a
            href='mailto: sarah@royalridges.org'
            className='text-green-200 hover:text-indigo-400 hover:underline'
          >
            sarah@royalridges.org
          </a>{' '}
          to donate items or hay.
        </p>

        <div className='flex flex-col md:flex-row w-full justify-between px-8'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1688934484/Royal-Ridges/before_barn_fire_njqn1n.jpg'
            alt='barn before fire'
            width={400}
            height={400}
            className='rounded-2xl shadow-xl mt-2 w-96 h-60'
          />
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1688934484/Royal-Ridges/during_barn_fire_uxplf1.jpg'
            alt='barn during fire'
            width={400}
            height={400}
            className='rounded-2xl shadow-xl mt-2 w-96 h-48'
          />
        </div>

        <hr />

        <p className='my-4'>
          We are excited about what God has planned for 2023 at Royal
          Ridges. Will you join us by supporting our mission at Royal
          Ridges by sending a gift to one of these following areas of
          need?
        </p>

        <h3 className='font-cursive text-center text-xl mb-4'>
          Donate{' '}
          <a
            href='https://www.ultracamp.com/donations/donationintention.aspx?idCamp=1145&campCode=151'
            className='text-green-200 hover:text-indigo-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Today
          </a>
          &nbsp;!
        </h3>

        <p className='my-4'>
          <span className='font-medium text-lg'>
            Camp Scholarships
          </span>{' '}
          ~ Send deserving kids to camp by giving a gift to be used
          for our scholarship program. We are looking for scholarships
          for kids who are in need of a safe place to stay.
        </p>

        <p className='my-4'>
          <span className='font-medium text-lg'>
            Building Projects
          </span>{' '}
          ~ Help Royal Ridges improve our property and activities for
          our guests&#39; continued enjoyment.
        </p>

        <p className='my-4'>
          <span className='font-medium text-lg'>
            Ralph Bovey Memorial Scholarship
          </span>{' '}
          ~ Give a gift in honor of the late Ralph Bovey, a long-time
          supporter of Royal Ridges. His family wants to honor his
          memory by sharing his love of horses and the gospel with
          deserving kids by sending them to Summer Camp.
        </p>

        <p className='my-4'>
          <span className='font-medium text-lg'>General Fund</span> ~
          Give a gift that will go directly to support the day-to-day
          operations of Royal Ridges.
        </p>

        <h3 className='my-4 font-semibold text-xl'>
          Gift in-kind Donations:
        </h3>

        <p className='my-4'>
          <span className='font-medium text-lg'>Horse Donations</span>{' '}
          ~ Do you have a horse that you think will serve well at
          Royal Ridges. Then please contact our Program Director,
          Chrisy, at programs@royalridges.org.
        </p>

        <p className='my-4'>
          <span className='font-medium text-lg'>Tack Donations</span>{' '}
          ~ Do you have horse tack and gear that you would like to
          donate to our programs. Then please contact our Program
          Director Chrisy at programs@royalridges.org.
        </p>

        <p className='my-4'>
          <span className='font-medium text-lg'>Other Donations</span>{' '}
          ~ Do you want to have an item that you think would be useful
          to any one of our programs, please email
          Info@royalridges.org with a description.
        </p>

        <p className='my-4'>
          If you want to send a donation as check then make it payable
          to Royal Ridges and send it to PO Box 3010 Battle Ground, WA
          98604 All donations are tax-deductible and greatly
          appreciated.
        </p>

        <h3 className='font-cursive text-center text-xl mb-4'>
          Donate{' '}
          <a
            href='https://www.ultracamp.com/donations/donationintention.aspx?idCamp=1145&campCode=151'
            className='text-green-200 hover:text-indigo-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Today
          </a>
          &nbsp;!
        </h3>

        <div className='grid grid-cols-2 '>
          <div className='text-center'>
            <div className='flex justify-center'>
              <Image
                alt='Amazon Smile'
                src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/amazonSmile.png'
                width={400}
                height={400}
                className='w-28 rounded-2xl'
              />
            </div>
            <p className='font-semibold text-xl'>
              How to sign up for AmazonSmile
            </p>
            <p className='ml-1'>
              How to use AmazonSmile on a web browser:
            </p>
            <p className='ml-1'>
              Visit{' '}
              <a
                href='https://smile.amazon.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400'
              >
                smile.amazon.com
              </a>
              .
            </p>
            <p className='ml-1'>
              Sign in with the same account you use for Amazon.com
            </p>
            <p className='ml-1'>Select your charity</p>
            <p className='ml-1'>
              Start shopping! Remember to check out at
              smile.amazon.com to generate donations for your chosen
              charity.
            </p>
            <p className='ml-1'>
              Tip: Add a bookmark to make it easier to shop at{` `}
              <a
                href='https://smile.amazon.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400'
              >
                smile.amazon.com
              </a>
              .
            </p>

            <p className='font-semibold text-xl'>
              How to use AmazonSmile using the Amazon app on your
              mobile phone:
            </p>
            <p className='ml-1'>Open the Amazon Shopping app</p>
            <p className='ml-1'>Navigate to the main menu (=)</p>
            <p className='ml-1'>
              Tap on Settings and then select “AmazonSmile”
            </p>
            <p className='ml-1'>
              Select your charity and then follow the on-screen
              instructions to turn ON AmazonSmile in the mobile app
            </p>
            <p className='ml-1'>
              Once AmazonSmile has been activated in your app, future
              eligible app purchases will generate a donation for the
              charity you have selected.
            </p>
            <p className='ml-1'>
              Note: The tablet app is not yet supported. Please visit{' '}
              <a
                href='https://smile.amazon.com/onthego'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-200 hover:underline hover:text-indigo-400'
              >
                smile.amazon.com/onthego
              </a>{' '}
              to learn more.
            </p>
          </div>

          <div className=''>
            <div className='flex justify-center'>
              <Image
                alt='Fred Meyers'
                src='https://royal-ridges-retreat.s3.us-west-1.amazonaws.com/fredMeyers.png'
                width={400}
                height={400}
                className='w-28 rounded-2xl'
              />
            </div>
            <p className='mt-4'>
              Designate Royal Ridges Retreat as your favorite charity
              with your Fred Meyer Community Rewards. Note: this does
              not detract from your rewards earned.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donations;
