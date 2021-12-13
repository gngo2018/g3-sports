import Head from 'next/head'
import { useForm, ValidationError } from '@formspree/react'
import ReCaptchaV2 from 'react-google-recaptcha'
import requestServiceStyles from './request_service.module.css'

export default function RequestService() {
    const [form, handleSubmit] = useForm('xlezenvr');

    if (form.succeeded) {
        return <p className={requestServiceStyles.request_service_container}>Form has been submitted! Your request will be responded to in 1-2 business days. Thank you for your interest in G3 Sports!</p>;
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
                            <option></option>
                            <option>Stringing</option>
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
                    <ReCaptchaV2 sitekey="6LfjIZodAAAAAOm3c-GcCmC1a6wpS5Mk-4Bdd-Jt" />
                    <button type="submit" disabled={form.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}