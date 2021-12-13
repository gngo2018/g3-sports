import Head from 'next/head'
import { useForm, ValidationError } from '@formspree/react'
import ReCaptchaV2 from 'react-google-recaptcha'
import requestServiceStyles from './request_service.module.css'
import { useState } from 'react';
const formSpreeApiKey = process.env.NEXT_PUBLIC_Formspree_Api_Key + "";
const googleCaptchaKey = process.env.NEXT_PUBLIC_Google_Captcha_Key + "";

interface Service{
    serviceName: string,
    serviceCost: number
}

export default function RequestService() {
    const [form, handleSubmit] = useForm(formSpreeApiKey);
    
    const serviceArray: Service[] = [
        {serviceName: "Stringing (String provided)", serviceCost: 15.00},
        {serviceName: "Stringing (String needed - Syn Gut)", serviceCost: 20.00},
        {serviceName: "Stringing (String needed - Full Poly)", serviceCost: 25.00},
        {serviceName: "Stringing (String needed - Hybrid)", serviceCost: 25.00},
        {serviceName: "Replacement Grip (Grip provided)", serviceCost: 5.00},
        {serviceName: "Replacement Grip (Grip needed)", serviceCost: 10.00},
        {serviceName: "Lead Tape", serviceCost: 10.00},
        {serviceName: "Grip Building", serviceCost: 15.00}
    ]

    console.log(serviceArray)

    if (form.succeeded) {
        return <p className={requestServiceStyles.request_service_success_container}>Form has been submitted! Your request will be responded to in 1-2 business days. Thank you for your interest in G3 Sports!</p>;
    }

    return (
        <>
            <Head>
                <title>Request Service</title>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            </Head>
            <div className={requestServiceStyles.request_service_container}>
                <h2>Request Service</h2>
                <form className={requestServiceStyles.request_service_form} onSubmit={handleSubmit}>
                    <div className={requestServiceStyles.form_input}>
                        <label>
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                        />
                    </div>
                    <div className={requestServiceStyles.form_input}>
                        <label>
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                        />
                    </div>
                    <div className={requestServiceStyles.form_input}>
                        <label>
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={form.errors}
                        />
                    </div>
                    <div className={requestServiceStyles.form_input}>
                        <label>
                            Phone Number
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="number"
                        />
                    </div>
                    <div className={requestServiceStyles.form_input}>
                        <label>
                            Service
                        </label>
                        <select id="service" name="service">
                            {
                                serviceArray.map(service => (
                                    <option key={service.serviceName}>{service.serviceName}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={requestServiceStyles.form_input}>
                        <label>
                            Special Requests
                        </label>
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={form.errors}
                        />
                    </div>
                    <ReCaptchaV2 sitekey={googleCaptchaKey} />
                    <button type="submit" disabled={form.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}