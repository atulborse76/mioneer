import  { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-darkBg via-darkBgLight to-darkBg pt-32 pb-20">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
                
                {/* Introduction Section */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get in <span className='gradient-text'>Touch</span> with Us
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </motion.div>

                {/* Contact Information Cards */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandPrimary transition-all duration-300 group'>
                        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-brandPrimary to-brandSecondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                            <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
                        <p className="text-lg text-gray-400">+91-7620691360</p>
                    </div>

                    <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandSecondary transition-all duration-300 group'>
                        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-brandSecondary to-brandPrimary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                            <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                        <p className="text-lg text-gray-400">contact@mioneer.com</p>
                    </div>

                    <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandPrimary transition-all duration-300 group'>
                        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-brandPrimary to-brandSecondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                            <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Office Hours</h3>
                        <p className="text-lg text-gray-400">Mon - Fri, 9:00am - 6:00pm</p>
                    </div>
                </motion.div>

                {/* Contact Form & Map Section */}
                <motion.div 
                    className="grid lg:grid-cols-2 gap-12 mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 shadow-2xl">
                        <h3 className="text-3xl font-bold text-white mb-8">
                            Send Us a <span className='gradient-text'>Message</span>
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-brandPrimary focus:ring-2 focus:ring-brandPrimary/50 transition-all duration-300 outline-none" 
                                    placeholder="John Doe"
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email *</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-brandPrimary focus:ring-2 focus:ring-brandPrimary/50 transition-all duration-300 outline-none" 
                                    placeholder="john@example.com"
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message *</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6" 
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-brandPrimary focus:ring-2 focus:ring-brandPrimary/50 transition-all duration-300 outline-none resize-none" 
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-brandPrimary to-brandSecondary text-white py-4 px-6 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <motion.div 
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-gray-700 group-hover:border-brandPrimary transition-all duration-500 shadow-2xl">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.235524095016!2d77.05225237511105!3d28.472452875752538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19831c4428c7%3A0x509295f0dc8ddc!2sMioneer%20Private%20Limited!5e0!3m2!1sen!2sin!4v1724792738099!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, minHeight: '500px' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mioneer Private Limited Location"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Social Media Section */}
                <motion.div 
                    className="text-center mb-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-4xl font-bold text-white mb-4">
                        Connect with <span className='gradient-text'>Us</span>
                    </h3>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Follow us on social media and stay updated with the latest news and offers from Mioneer.
                    </p>
                    <div className="flex justify-center gap-6">
                        <a href="https://www.instagram.com/mioneerpvtltd/" className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-brandSecondary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110 group">
                            <FaInstagram size={28} />
                        </a>
                        <a href="https://www.linkedin.com/company/mioneer/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BWIZ3vEO%2FTTWMAlvi7Ce%2BaA%3D%3D" className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-brandSecondary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110">
                            <FaLinkedinIn size={28} />
                        </a>
                        <a href="https://x.com/mioneerpvtltd" className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-brandSecondary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110">
                            <FaTwitter size={28} />
                        </a>
                        <a href="https://www.threads.net/@mioneerpvtltd?hl=en" className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-brandSecondary hover:bg-gradient-to-br hover:from-brandPrimary hover:to-brandSecondary hover:text-white transition-all duration-300 transform hover:scale-110">
                            <FaThreads size={28} />
                        </a>
                    </div>
                </motion.div>

                {/* FAQs Section */}
                <motion.div 
                    className="mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-4xl font-bold text-white mb-12 text-center">
                        Frequently Asked <span className='gradient-text'>Questions</span>
                    </h3>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandPrimary transition-all duration-300">
                            <h4 className="text-2xl font-bold text-white mb-3">How can I contact Mioneer for a project?</h4>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                You can fill out the contact form above, email us at contact@mioneer.com, or give us a call at +91-7620691360. We will get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandSecondary transition-all duration-300">
                            <h4 className="text-2xl font-bold text-white mb-3">Where is your office located?</h4>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Our office is located at 7th Floor, Palm Court, Mehrauli Rd, Industrial Development Area, Sector 16, Gurugram, Haryana 122007.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-brandPrimary transition-all duration-300">
                            <h4 className="text-2xl font-bold text-white mb-3">What services do you offer?</h4>
                            <p className="text-lg text-gray-400 leading-relaxed">
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