
import { motion } from 'framer-motion';
import videoVision from '../assets/videoVision.mp4';
import videoValues from '../assets/videoValues.mp4';

import videoEnv from '../assets/videoEnv.mp4';
import videoCSR from '../assets/videoCSR.mp4';


function AboutUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-darkBg via-gray-900 to-darkBg pt-32 pb-20">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">

                {/* Hero Section */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}    
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                     <h1 className="text-6xl font-bold text-white mb-6">
                        Welcome to <span className='gradient-text'>Mioneer</span>
                    </h1>
                    <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
                        At Mioneer, we are committed to driving innovation through technology. Our mission is to empower businesses worldwide with cutting-edge solutions tailored to meet the challenges of the modern world.
                    </p>
                </motion.div>

                {/* Vision & Mission Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary to-brandSecondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <video 
                                src={videoVision} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl border-2 border-gray-700 group-hover:border-brandPrimary transition-all duration-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandPrimary transition-all duration-300">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Our <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>Vision</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To be the leading force in technological innovation, offering solutions that not only address today&#39;s challenges but also anticipate tomorrow&#39;s needs.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandSecondary transition-all duration-300">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                Our <span className='bg-gradient-to-r from-brandSecondary to-brandPrimary bg-clip-text text-transparent'>Mission</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To empower companies by integrating advanced technologies into their operations, helping them achieve their goals faster and more efficiently.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                                Our <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>Values</span>
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { title: 'Innovation', desc: 'Continuously exploring and implementing the latest technologies.' },
                                    { title: 'Integrity', desc: 'Upholding the highest standards of honesty.' },
                                    { title: 'Customer-Centricity', desc: 'Prioritizing the needs of our clients.' },
                                    { title: 'Excellence', desc: 'Committing to quality and excellence in every aspect of our work.' }
                                ].map((value, idx) => (
                                    <div key={idx} className="flex items-start space-x-4 group">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brandPrimary to-brandSecondary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-brandPrimary transition-colors duration-300">{value.title}</h4>
                                            <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brandSecondary to-brandPrimary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <video 
                                src={videoValues} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl border-2 border-gray-700 group-hover:border-brandSecondary transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Culture & Work Environment Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <video 
                                src={videoEnv} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl border-2 border-gray-700 group-hover:border-purple-500 transition-all duration-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Our <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Culture</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                At Mioneer, we foster a collaborative and inclusive work environment where creativity thrives. Our culture is built on mutual respect, continuous learning, and a shared passion for innovation.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We believe in empowering our team to achieve their full potential, knowing that their success drives our company forward. Join us and be a part of a company that values your contributions and invests in your growth.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Global Presence Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-700 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>Global Presence</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            Mioneer operates across multiple countries, serving clients worldwide. Our offices are strategically located to ensure we are close to our clients, offering personalized service wherever they are.
                        </p>
                    </div>
                </motion.div>

                {/* Technology & Innovation Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-700 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Technology & <span className='bg-gradient-to-r from-brandSecondary to-brandPrimary bg-clip-text text-transparent'>Innovation</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                            At the heart of Mioneer is a relentless pursuit of innovation. We leverage the latest technologies in AI, blockchain, and cloud computing to create groundbreaking solutions that push the boundaries of what&#39;s possible.
                        </p>
                    </div>
                </motion.div>

                {/* CSR Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            <video 
                                src={videoCSR} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="relative w-full h-auto max-w-md rounded-3xl shadow-2xl border-2 border-gray-700 group-hover:border-green-500 transition-all duration-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center order-1 lg:order-2">
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-10 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Corporate Social <span className='bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent'>Responsibility</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Mioneer is committed to making a positive impact on society. We actively participate in various social initiatives, focusing on education, sustainability, and community development. We believe in giving back to the communities that support us and making the world a better place through our corporate actions.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>Achievements</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                            Over the years, Mioneer has achieved significant milestones that have propelled us to the forefront of the tech industry.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-700 hover:border-brandPrimary transition-all duration-300 text-center group">
                            <h4 className="text-6xl font-bold bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">20+</h4>
                            <p className="text-xl text-gray-400">Projects Completed</p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-700 hover:border-brandSecondary transition-all duration-300 text-center group">
                            <h4 className="text-6xl font-bold bg-gradient-to-r from-brandSecondary to-brandPrimary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">10+</h4>
                            <p className="text-xl text-gray-400">Clients Worldwide</p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            What Our <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>Clients Say</span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { text: "Mioneer has been a game-changer for our business. Their innovative solutions have helped us streamline our operations and achieve new levels of efficiency.", company: "Rovust LLC." },
                            { text: "The team at Mioneer is exceptional. They truly understand our needs and have delivered solutions that exceed our expectations every time.", company: "SolutionAI" },
                            { text: "Their expertise in AI and blockchain has been invaluable to our company. Mioneer is a trusted partner that we rely on for all our tech needs.", company: "Skyware Solutions" }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandPrimary transition-all duration-300 group">
                                <div className="text-brandPrimary text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">&quot;</div>
                                <p className="text-gray-400 mb-6 leading-relaxed italic">
                                    {testimonial.text}
                                </p>
                                <h4 className="text-lg font-bold text-white">- {testimonial.company}</h4>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto mt-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-16 rounded-3xl border border-gray-700 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-brandPrimary/20 to-brandSecondary/20 blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Work <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>With Us?</span>
                            </h3>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                                Contact us today to learn how we can help your business achieve its goals with our innovative technology solutions.
                            </p>
                            <a href="/contact" className="inline-block bg-gradient-to-r from-brandPrimary to-brandSecondary text-white py-4 px-10 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-brandPrimary/50 transition-all duration-300">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default AboutUsPage;