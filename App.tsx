import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ForSaleProperties from './components/ForSaleProperties';
import ForRentProperties from './components/ForRentProperties';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="bg-[#FFF7ED] text-[#1A202C] font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <ForSaleProperties />
        <ForRentProperties />
        <Testimonials />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;