'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-phone-input-2/lib/style.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '@/Model/Contact'

// منع SSR لمكتبة phone input
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

const Register = () => {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: '', phone: '', email: '', message: '' }
    });

    // مزامنة phone input مع react-hook-form
    const handlePhoneChange = (value: string) => {
        setPhone(value);
        setValue('phone', value);
    };

    const onSubmit = async (data: ContactFormData) => {
        setLoading(true);
        try {
            const response = await fetch('https://formspree.io/f/xldwayzv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSuccess(true);
                reset();
                setPhone('');
            } else {
                const errorData = await response.json();
                console.error('Formspree error:', errorData);
            }
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="register-form" className="px-4 sm:px-8 md:px-[65px] py-8">
            <div className="bg-black w-full p-6 sm:p-[55px] grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[460px]">
                {/* form */}
                <div>
                    <h1 className="text-white text-2xl sm:text-3xl font-editors italic mb-6 sm:mb-8">
                        Register Your Interest
                    </h1>

                    {success && (
                        <p className="text-green-400 mb-4">
                            Your message has been sent successfully!
                        </p>
                    )}

                    <form
                        className="flex flex-col gap-4 sm:gap-6 max-w-full sm:max-w-[800px]"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* Name */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <label className="text-base sm:text-[18px] font-helvetica text-white w-full sm:w-[120px]">
                                Name
                            </label>
                            <div className="flex flex-col w-full sm:w-[350px]">
                                <input
                                    type="text"
                                    className="bg-transparent border-b text-white border-[#A19F96] text-sm sm:text-[16px] w-full focus:outline-none p-2"
                                    placeholder="Type Your Name Here"
                                    {...register('name')}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Number */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 z-[500]">
                            <label className="text-base sm:text-[18px] font-helvetica text-white w-full sm:w-[112px]">
                                Number
                            </label>
                            <div className="w-full sm:w-[350px]">
                                <PhoneInput
                                    country={'sa'}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    inputStyle={{
                                        width: '100%',
                                        maxWidth: '350px',
                                        height: '40px',
                                        border: 0,
                                        backgroundColor: 'transparent',
                                        borderBottom: '1px solid #A19F96',
                                        fontSize: '16px',
                                        color: '#FFFFFF',
                                        paddingLeft: '48px',
                                        borderRadius: '0',
                                    }}
                                    buttonStyle={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                        maxWidth: '350px',
                                    }}
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <label className="text-base sm:text-[18px] font-helvetica text-white w-full sm:w-[120px]">
                                Email
                            </label>
                            <div className="flex flex-col w-full sm:w-[350px]">
                                <input
                                    type="email"
                                    className="bg-transparent border-b text-white border-[#A19F96] text-sm sm:text-[16px] w-full focus:outline-none p-2"
                                    placeholder="example@gmail.com"
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                                )}
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                            <div className="w-full sm:w-[120px]" />
                            <button
                                type="submit"
                                disabled={loading}
                                className={`
                                    w-full sm:w-[120px]
                                    px-6 py-3 
                                    rounded-full 
                                    text-white 
                                    font-helvetica
                                    bg-gray-300/30
                                    backdrop-blur-md      
                                    transition-colors
                                    relative
                                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                                style={{
                                    boxShadow: '0px 0px 15px rgba(255,255,255,0.2) inset, 0px 0px 15px rgba(255,255,255,0.1)',
                                }}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Maps */}
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-white text-2xl sm:text-[28px] font-editors italic underline">
                        For Seasons Jeddah Location
                    </h1>
                    <p className="text-white text-lg sm:text-[28px] font-editors italic underline w-full sm:w-1/2 break-words">
                        https://share.google/PnaOkW2VokbguXFPE
                    </p>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3617150738573!2d39.10925551076731!3d21.571799468823556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db672b91117b%3A0xcdfd3c5c1b348010!2sFour%20Seasons%20Hotel%20%26%20Residences%20Project!5e0!3m2!1sen!2sus!4v1757350955917!5m2!1sen!2sus"
                        width="205"
                        height="180"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className='w-full md:w-[205px]'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Register
