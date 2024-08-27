import React from 'react';
import { motion } from 'framer-motion';
import videoVision from '../assets/videoVision.mp4';
import videoValues from '../assets/videoValues.mp4';
import videoGlobal from '../assets/videoGlobal.mp4';
import videoEnv from '../assets/videoEnv.mp4';
import videoCSR from '../assets/videoCSR.mp4';
import videoInno from '../assets/videoInno.mp4';

function AboutUsPage() {
    return (
        <div className="bg-gradient-to-r from-white to-gray-100 py-16">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">

                {/* Hero Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}    
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-7xl font-bold text-gray-800">
                        Welcome to Mioneer Private Limited
                    </h1>
                    <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                        At Mioneer, we are committed to driving innovation through technology. Our mission is to empower businesses worldwide with cutting-edge solutions tailored to meet the challenges of the modern world.
                    </p>
                </motion.div>

                {/* Introduction Video Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* <h2 className="text-5xl font-semibold text-gray-800 mb-8">
                        Get to Know Us
                    </h2> */}
                    {/* <video className="w-full max-w-3xl mx-auto rounded-lg shadow-lg" controls>
                        <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                </motion.div>

                {/* Vision & Mission Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center">
                        <video 
                            src={videoVision} 
                            autoPlay 
                            loop 
                            muted 
                            // playsInline
                            className="w-full h-auto max-w-xs rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-5xl font-semibold text-gray-800 mb-4">
                            Our Vision
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To be the leading force in technological innovation, offering solutions that not only address today's challenges but also anticipate tomorrow's needs.
                        </p>
                        <h3 className="text-5xl font-semibold text-gray-800 mt-10 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            To empower companies by integrating advanced technologies into their operations, helping them achieve their goals faster and more efficiently.
                        </p>
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center">
                    <video 
                            src={videoValues} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-auto max-w-xs rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-5xl font-semibold text-gray-800 mb-4">
                            Our Values
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed mb-4">
                            <li className="mb-4"><strong>Innovation:</strong> Continuously exploring and implementing the latest technologies.</li>
                            <li className="mb-4"><strong>Integrity:</strong> Upholding the highest standards of honesty.</li>
                            <li className="mb-4"><strong>Customer-Centricity:</strong> Prioritizing the needs of our clients.</li>
                            <li className="mb-4"><strong>Excellence:</strong> Committing to quality and excellence in every aspect of our work.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Culture & Work Environment Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center">
                    <video 
                            src={videoEnv} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-auto max-w-xs rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-5xl font-semibold text-gray-800 mb-4">
                            Our Culture
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            At Mioneer, we foster a collaborative and inclusive work environment where creativity thrives. Our culture is built on mutual respect, continuous learning, and a shared passion for innovation. We believe in empowering our team to achieve their full potential, knowing that their success drives our company forward.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Join us and be a part of a company that values your contributions and invests in your growth.
                        </p>
                    </div>
                </motion.div>

                {/* Global Presence Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-semibold text-gray-800 mb-8">
                        Our Global Presence
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-4">
                        Mioneer operates across multiple countries, serving clients worldwide. Our offices are strategically located to ensure we are close to our clients, offering personalized service wherever they are.
                    </p>
                    {/* <video 
                            src={videoGlobal} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-auto max-w-xs rounded-lg shadow-lg"
                        />                 */}
                </motion.div>

                {/* Technology & Innovation Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-semibold text-gray-800 mb-8">
                        Technology & Innovation
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-4">
                        At the heart of Mioneer is a relentless pursuit of innovation. We leverage the latest technologies in AI, blockchain, and cloud computing to create groundbreaking solutions that push the boundaries of what's possible.
                    </p>
                    {/* <video 
                            src={videoInno} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-auto max-w-xs rounded-lg shadow-lg"
                        />                 */}
                </motion.div>

                {/* CSR Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center">
                        <video 
                            src={videoCSR} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-auto max-w-xs rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-5xl font-semibold text-gray-800 mb-4">
                            Corporate Social Responsibility
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Mioneer is committed to making a positive impact on society. We actively participate in various social initiatives, focusing on education, sustainability, and community development. We believe in giving back to the communities that support us and making the world a better place through our corporate actions.
                        </p>
                    </div>
                </motion.div>

                {/* Press & Media Section */}
                {/* <motion.div 
                    className="md:w-11/12 mx-auto mt-24 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-semibold text-gray-800 mb-8">
                        In the Press
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-4">
                        Mioneer has been featured in several leading publications, recognized for our innovative solutions and industry leadership.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <img src="https://source.unsplash.com/600x400/?magazine,news" alt="Press Image" className="w-full h-auto rounded-lg mb-4" />
                            <h4 className="text-xl font-bold text-gray-800">Tech Innovators 2024</h4>
                            <p className="text-gray-600 mt-2">Mioneer featured in Tech Innovators 2024 for its breakthrough AI solutions.</p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <img src="https://source.unsplash.com/600x400/?newspaper,article" alt="Press Image" className="w-full h-auto rounded-lg mb-4" />
                            <h4 className="text-xl font-bold text-gray-800">Blockchain Disruptors</h4>
                            <p className="text-gray-600 mt-2">Recognized as a leading blockchain innovator by Blockchain Weekly.</p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <img src="https://source.unsplash.com/600x400/?media,news" alt="Press Image" className="w-full h-auto rounded-lg mb-4" />
                            <h4 className="text-xl font-bold text-gray-800">Best Workplace Awards</h4>
                            <p className="text-gray-600 mt-2">Awarded the Best Workplace for Tech Professionals in 2023.</p>
                        </div>
                    </div>
                </motion.div> */}

                {/* Achievements Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-5xl font-semibold text-gray-800 mb-4">
                        Our Achievements
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Over the years, Mioneer has achieved significant milestones that have propelled us to the forefront of the tech industry.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <h4 className="text-4xl font-bold text-gray-800 mb-2">20+</h4>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <h4 className="text-4xl font-bold text-gray-800 mb-2">10+</h4>
                            <p className="text-gray-600">Clients Worldwide</p>
                        </div>
                        {/* <div className="p-8 bg-white rounded-lg shadow-lg">
                            <h4 className="text-4xl font-bold text-gray-800 mb-2">5</h4>
                            <p className="text-gray-600">Industry Awards</p>
                        </div> */}
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-5xl font-semibold text-gray-800 mb-4">
                        What Our Clients Say
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">
                                "Mioneer has been a game-changer for our business. Their innovative solutions have helped us streamline our operations and achieve new levels of efficiency."
                            </p>
                            <h4 className="text-xl font-bold text-gray-800">- Rovust LLC.</h4>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">
                                "The team at Mioneer is exceptional. They truly understand our needs and have delivered solutions that exceed our expectations every time."
                            </p>
                            <h4 className="text-xl font-bold text-gray-800">- SolutionAI</h4>
                        </div>
                        <div className="p-8 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">
                                "Their expertise in AI and blockchain has been invaluable to our company. Mioneer is a trusted partner that we rely on for all our tech needs."
                            </p>
                            <h4 className="text-xl font-bold text-gray-800">- Skyware Solutions</h4>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 text-center py-16 bg-gray-200 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-5xl font-semibold text-gray-800 mb-4">
                        Ready to Work With Us?
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Contact us today to learn how we can help your business achieve its goals with our innovative technology solutions.
                    </p>
                    <a href="/contact" className="inline-block mt-8 bg-brandSecondary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-brandPrimary transition">
                        Get in Touch
                    </a>
                </motion.div>

            </div>
        </div>
    );
}

export default AboutUsPage;
