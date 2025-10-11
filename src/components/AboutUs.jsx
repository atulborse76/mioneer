
import { motion } from 'framer-motion';
import banner4 from '../assets/banner4.mp4';
import visionImage from '../assets/banner8.png';
import valuesImage from '../assets/banner6.png';


function AboutUs() {
    return (
        <div className="bg-darkBg py-8" id='about'>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
                
                {/* Heading Section */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-6xl font-bold text-white mb-6">
                        About <span className='gradient-text'>Mioneer</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Pioneering the future of technology with innovative AI, blockchain, and software solutions that transform businesses and drive digital excellence.
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div 
                    className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="lg:w-1/2">
                        <motion.video
                            src={banner4}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl shadow-2xl w-full border border-gray-800"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                    <motion.div 
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Leading Digital Transformation
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Mioneer Private Limited stands at the forefront of technological innovation, specializing in AI-driven solutions, blockchain integration, and bespoke software development. We empower businesses to navigate the digital landscape with confidence and agility.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our expert team combines deep industry knowledge with cutting-edge technology to deliver solutions that not only meet today&#39;s challenges but also anticipate tomorrow&#39;s opportunities.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Vision Section */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-16 items-center mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h3 className="text-4xl font-bold text-white mb-6">
                            Our <span className='gradient-text'>Vision</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            To create a world where technology seamlessly enhances human potential and business capabilities. We envision a future where innovation knows no bounds and every organization can leverage cutting-edge technology to achieve extraordinary results.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We&#39;re committed to pushing the boundaries of what&#39;s possible, driving progress through relentless innovation and strategic thinking.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src={visionImage} 
                            alt="Vision" 
                            className="rounded-2xl shadow-2xl w-full border border-gray-800"
                        />
                    </motion.div>
                </motion.div>

                {/* Values Section */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-16 items-center mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src={valuesImage} 
                            alt="Values" 
                            className="rounded-2xl shadow-2xl w-full border border-gray-800"
                        />
                    </motion.div>
                    <div>
                        <h3 className="text-4xl font-bold text-white mb-6">
                            Our <span className='gradient-text'>Values</span>
                        </h3>
                        <div className="space-y-4">
                            {[
                                { title: "Innovation", desc: "Continuously exploring and implementing the latest technologies" },
                                { title: "Integrity", desc: "Upholding the highest standards of honesty and transparency" },
                                { title: "Excellence", desc: "Committed to quality in every aspect of our work" },
                                { title: "Collaboration", desc: "Working together to achieve extraordinary results" }
                            ].map((value, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-3 h-3 bg-brandPrimary rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-1">{value.title}</h4>
                                        <p className="text-gray-400">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                 <motion.div 
                    className="mt-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-16 rounded-3xl border border-gray-700 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-brandPrimary/20 to-brandSecondary/20 blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>Business?</span>
                            </h3>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                                Let&#39;s discuss how our services can help you achieve your goals and stay ahead of the competition.
                            </p>
                            <a href="/contact" className="inline-block bg-gradient-to-r from-brandPrimary to-brandSecondary text-white py-4 px-10 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutUs;