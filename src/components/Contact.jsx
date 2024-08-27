import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";

function ContactPage() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                
                {/* Introduction Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-bold text-gray-800">
                        Get in Touch with Us
                    </h1>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </motion.div>

                {/* Contact Information Section */}
                <motion.div 
                    className="text-center mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-800">Phone</h3>
                        <p className="text-lg text-gray-600 mt-2">+91-7620691360</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-800">Email</h3>
                        <p className="text-lg text-gray-600 mt-2">contact@mioneer.com</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-800">Office Hours</h3>
                        <p className="text-lg text-gray-600 mt-2">Mon - Fri, 9:00am - 6:00pm</p>
                    </div>
                </motion.div>

                {/* Contact Form Section */}
                <motion.div 
                    className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="md:w-1/2">
                        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                                Send Us a Message
                            </h3>
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full p-3 border rounded-lg" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full p-3 border rounded-lg" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full p-3 border rounded-lg" required></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">Send Message</button>
                        </form>
                    </div>
                    <div className="md:w-1/2">
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.235524095016!2d77.05225237511105!3d28.472452875752538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19831c4428c7%3A0x509295f0dc8ddc!2sMioneer%20Private%20Limited!5e0!3m2!1sen!2sin!4v1724792738099!5m2!1sen!2sin" 
                                    width="600" 
                                    height="450" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mioneer Private Limited Location"
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Social Media Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-semibold text-gray-800">Connect with Us</h3>
                    <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
                        Follow us on social media and stay updated with the latest news and offers from Mioneer.
                    </p>
                    <div className="flex justify-center mt-6 space-x-6">
                        <a href="https://www.instagram.com/mioneerpvtltd/" className="text-[#FF914D] hover:text-[#FF914D]">
                            <FaInstagram size={32} />
                        </a>
                        <a href="https://www.linkedin.com/company/mioneer/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWIZ3vEO%2FTTWMAlvi7Ce%2BaA%3D%3D" className="text-[#FF914D] hover:text-[#FF914D]">
                            <FaLinkedinIn size={32} />
                        </a>
                        <a href="https://x.com/mioneerpvtltd" className="text-[#FF914D] hover:text-[#FF914D]">
                            <FaTwitter size={32} />
                        </a>
                        <a href="https://www.threads.net/@mioneerpvtltd?hl=en" className="text-[#FF914D] hover:text-[#FF914D]">
                            <FaThreads size={32} />
                        </a>
                    </div>
                </motion.div>

                {/* FAQs Section */}
                <motion.div 
                    className="text-left mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Frequently Asked Questions</h3>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800">How can I contact Mioneer for a project?</h4>
                            <p className="text-lg text-gray-600 mt-2">
                                You can fill out the contact form above, email us at contact@mioneer.com, or give us a call at +91-7620691360. We will get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800">Where is your office located?</h4>
                            <p className="text-lg text-gray-600 mt-2">
                                Our office is located at 7th Floor, Palm Court, Mehrauli Rd, Industrial Development Area, Sector 16, Gurugram, Haryana 122007.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800">What services do you offer?</h4>
                            <p className="text-lg text-gray-600 mt-2">
                                Mioneer specializes in AI, blockchain, software development, and tech consultancy. We offer a range of services tailored to meet the unique needs of our clients.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default ContactPage;
