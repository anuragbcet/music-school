import ContactForm from '@/components/ui/contanctForm'
import React from 'react'
import { useState } from 'react'


const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full mt-10">
        <h1 className="text-2xl font-bold mb-4 mt-10 pt-8 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
