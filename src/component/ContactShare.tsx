'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, contactSchema } from '@/Model/Contact';

// prevent SSR for phone input
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false })

const ContactShare = () => {
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSuccessMessage('');

        try {
            const res = await fetch('https://formspree.io/f/xldwayzv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSuccessMessage('Form submitted successfully!');
                reset();
                setPhone('');
            } else {
                setSuccessMessage('Failed to submit. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setSuccessMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-12 bg-white">
            <div className="h-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-[70px]">
                <div>
                    <h1 className="text-[28px] font-editors italic mb-8">
                        Register Your Interest
                    </h1>

                    <form className="flex flex-col gap-6 max-w-[800px]" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label className="text-[18px] font-helvetica w-[120px]">Name</label>
                            <div className="w-full md:w-[350px]">
                                <input
                                    type="text"
                                    {...register('name')}
                                    className="bg-transparent border-b border-[#A19F96] text-[16px] w-full focus:outline-none p-2"
                                    placeholder="Type Your Name Here"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>
                        </div>

                        {/* Number */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 z-[500]">
                            <label className="text-[18px] font-helvetica w-[113px]">Number</label>
                            <div className="w-full md:w-[350px]">
                                <PhoneInput
                                    country="sa"
                                    value={phone}
                                    onChange={(value) => {
                                        setPhone(value);
                                        setValue('phone', value, { shouldValidate: true });
                                    }}
                                    inputStyle={{
                                        width: '100%',
                                        height: '40px',
                                        border: '0',
                                        backgroundColor: 'transparent',
                                        borderBottom: '1px solid #A19F96',
                                        fontSize: '16px',
                                        borderRadius: '0',
                                    }}
                                    buttonStyle={{ backgroundColor: 'transparent', border: 'none' }}
                                    containerStyle={{ width: '100%' }}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label className="text-[18px] font-helvetica w-[120px]">Email</label>
                            <div className="w-full md:w-[350px]">
                                <input
                                    type="email"
                                    {...register('email')}
                                    className="bg-transparent border-b border-[#A19F96] text-[16px] w-full focus:outline-none p-2"
                                    placeholder="example@gmail.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                        </div>


                        {/* Submit */}
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="w-[120px]" />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`mt-3 sm:mt-4 w-fit px-12 py-3 rounded-full text-black transition-colors ${isSubmitting ? 'opacity-50' : ''}`}
                                style={{ boxShadow: 'inset 7px 5px 10px rgba(0,0,0,0.1)' }}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-start gap-4'>
                            <div className='w-[120px]' />
                            {successMessage && <p className="  text-[16px]">{successMessage}</p>}
                        </div>

                    </form>
                </div>
            </div>

            <Link
                href="/projects"
                className="h-[37px] mx-auto bg-[#e4dedd] text-black w-[145px] backdrop-blur-md flex items-center justify-center rounded-full font-helvetica text-[14px]"
            >
                View All Projects
            </Link>
        </div>
    );
};

export default ContactShare;
