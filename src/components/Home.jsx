import React from 'react';
import { Carousel } from 'flowbite-react';
import bannerVideo from '../assets/banner1.mp4';
import bannerVideo2 from '../assets/banner2.mp4';
import bannerVideo3 from '../assets/banner3.mp4';
import Services from './Services';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div className='bg-neautralSilver' id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center 
                    justify-between gap-12">
                    <div className='w-full md:w-1/2'>
                        <video 
                            src={bannerVideo} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className='rounded-lg shadow-lg md:rounded-xl md:shadow-xl w-full'
                        />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neautralDGrey md:w-3/4 leading-snug'>
                            Empower Your Business with Cutting-Edge AI Solutions
                            <span className='text-brandPrimary leading-snug'> 
                                - Innovate and Thrive in the Digital Age
                            </span>
                        </h1>
                        <p className='text-lg text-neautralDGrey'>
                            Leverage the power of artificial intelligence to streamline operations, enhance decision-making, and drive growth.
                        </p>
                    </div>
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center 
                    justify-between gap-12">
                    <div className='w-full md:w-1/2'>
                        <video 
                            src={bannerVideo2} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className='rounded-lg shadow-lg md:rounded-xl md:shadow-xl w-full'
                        />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neautralDGrey md:w-3/4 leading-snug'>
                            Transform Your Vision into Reality with Expert Consultancy
                            <span className='text-brandPrimary leading-snug'> 
                                - Solutions Tailored to Your Needs
                            </span>
                        </h1>
                        <p className='text-lg text-neautralDGrey'>
                            From strategy to execution, we guide you through every step of your business transformation journey.
                        </p>
                    </div>
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center 
                    justify-between gap-12">
                    <div className='w-full md:w-1/2'>
                        <video 
                            src={bannerVideo3} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className='rounded-lg shadow-lg md:rounded-xl md:shadow-xl w-full'
                        />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-neautralDGrey md:w-3/4 leading-snug'>
                            Unleash the Power of Blockchain for Secure and Transparent Solutions
                            <span className='text-brandPrimary leading-snug'> 
                                - Building Trust in the Digital World
                            </span>
                        </h1>
                        <p className='text-lg text-neautralDGrey'>
                            Implement blockchain technologies to enhance security, transparency, and efficiency in your business processes.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
        <Services />
        <AboutUs />
    </div>
  );
}

export default Home;
