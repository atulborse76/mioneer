import React from 'react';
import { motion } from 'framer-motion';
import banner4 from '../assets/banner4.mp4';
import visionImage from '../assets/banner8.png';
import valuesImage from '../assets/banner6.png';
import approachImage from '../assets/banner7.png';

function AboutUs() {
    return (
        <div className="bg-gray-100 py-16" id=''>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                
                {/* Heading Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-bold text-neautralDGrey">
                        About Mioneer Private Limited
                    </h1>
                    <p className="text-lg text-neautralDGrey mt-4">
                        Discover our mission, vision, and values that drive us to create innovative solutions and deliver exceptional results.
                    </p>
                </motion.div>

                {/* Video and Company Information */}
                <motion.div 
                    className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="md:w-1/2">
                        <motion.video
                            src={banner4}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-lg shadow-lg md:rounded-xl md:shadow-xl w-full"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                    <motion.div 
                        className="md:w-1/2 mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-neautralDGrey text-lg leading-relaxed mb-8">
                            Mioneer Private Limited is a trailblazer in technology, specializing in AI, blockchain, and custom software development. We are committed to driving innovation and efficiency through cutting-edge solutions tailored to the unique needs of businesses across industries. Our mission is to empower companies by integrating advanced technologies into their operations, helping them achieve their goals faster and more efficiently.
                        </p>
                        <p className="text-neautralDGrey text-lg leading-relaxed">
                            Our dedicated team of experts works relentlessly to stay ahead of industry trends and deliver impactful solutions. From AI-powered analytics to secure blockchain implementations, we offer a comprehensive range of services designed to meet the evolving needs of modern businesses.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Our Vision Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-16 flex flex-col md:flex-row-reverse items-center gap-12"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="md:w-1/2">
                        <motion.img 
                            src={visionImage} 
                            alt="Vision" 
                            className="rounded-lg shadow-lg md:shadow-xl w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-4xl font-semibold text-neautralDGrey mb-4">
                            Our Vision
                        </h3>
                        <p className="text-neautralDGrey text-lg leading-relaxed mb-4">
                            At Mioneer, we envision a world where technology enhances every facet of life and business. Our vision is to be the leading force in technological innovation, offering solutions that not only address today's challenges but also anticipate tomorrow's needs. We aim to create a future where businesses can operate with unparalleled efficiency, security, and transparency.
                        </p>
                        <p className="text-neautralDGrey text-lg leading-relaxed">
                            We believe in pushing the boundaries of what’s possible, constantly striving for excellence and looking for new ways to leverage technology for a better tomorrow.
                        </p>
                    </div>
                </motion.div>

                {/* Our Values Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-16 flex flex-col md:flex-row items-center gap-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="md:w-1/2">
                        <motion.img 
                            src={valuesImage} 
                            alt="Values" 
                            className="rounded-lg shadow-lg md:shadow-xl w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-4xl font-semibold text-neautralDGrey mb-4">
                            Our Values
                        </h3>
                        <ul className="list-disc list-inside text-neautralDGrey text-lg leading-relaxed mb-4">
                            <li className="mb-4"><strong>Innovation:</strong> Continuously exploring and implementing the latest technologies to stay ahead in the digital age.</li>
                            <li className="mb-4"><strong>Integrity:</strong> Upholding the highest standards of honesty, transparency, and ethical conduct in every project.</li>
                            <li className="mb-4"><strong>Customer-Centricity:</strong> Prioritizing the needs and satisfaction of our clients, delivering solutions that create real value.</li>
                            <li className="mb-4"><strong>Excellence:</strong> Committing to quality and excellence in every aspect of our work, from strategy to execution.</li>
                        </ul>
                        <p className="text-neautralDGrey text-lg leading-relaxed">
                            These values guide us in every decision we make, ensuring that we remain committed to our mission of delivering exceptional results and making a positive impact in the tech industry.
                        </p>
                    </div>
                </motion.div>

                {/* Our Approach Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-16 flex flex-col md:flex-row-reverse items-center gap-12"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="md:w-1/2">
                        <motion.img 
                            src={approachImage} 
                            alt="Approach" 
                            className="rounded-lg shadow-lg md:shadow-xl w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-4xl font-semibold text-neautralDGrey mb-4">
                            Our Approach
                        </h3>
                        <p className="text-neautralDGrey text-lg leading-relaxed mb-4">
                            We believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals. Our team of experts leverages the latest technologies and methodologies to develop customized solutions that drive growth and efficiency. Whether it's AI-powered automation, blockchain-based security, or bespoke software development, Mioneer is dedicated to delivering results that exceed expectations.
                        </p>
                        <p className="text-neautralDGrey text-lg leading-relaxed">
                            Our approach is built on transparency, communication, and a deep understanding of our clients’ needs. We partner with you to deliver innovative solutions that align with your vision and drive success.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default AboutUs;
