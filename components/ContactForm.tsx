import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFFBEB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C]">Contact Us</h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and we'll get back to you shortly.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-[#FFF7ED] p-8 md:p-12 rounded-lg shadow-md border border-[#E2E8F0]">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A5568]">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C09553] focus:border-transparent text-[#1A202C]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A5568]">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C09553] focus:border-transparent text-[#1A202C]" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#4A5568]">Subject</label>
                <input type="text" id="subject" className="mt-1 block w-full px-4 py-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C09553] focus:border-transparent text-[#1A202C]" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-[#4A5568]">I'm interested in...</label>
                <select id="interest" className="mt-1 block w-full px-4 py-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C09553] focus:border-transparent text-[#1A202C]">
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Renting</option>
                    <option>Investing</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#4A5568]">Message</label>
                <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 bg-[#FFFBEB] border border-[#E2E8F0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C09553] focus:border-transparent text-[#1A202C]"></textarea>
              </div>
            </div>
            <div className="text-right mt-6">
              <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-bold rounded-full text-white bg-[#C09553] hover:bg-[#A87E41] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#C09553] transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;