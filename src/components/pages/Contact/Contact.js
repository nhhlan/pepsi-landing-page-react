import React, { useState } from 'react';
import { Footer } from '../../Footer';
import './Contact.css';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <>
            <div className="contact container">
                <form className="contact__form">
                    <div className="contact__formControl">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
                    </div>
                    <div className="contact__formControl">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
                    </div>
                    <div className="contact__formControl">
                        <label htmlFor="phone">Your Phone Number</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number"/>
                    </div>
                    <div className="contact__formControl">
                        <label htmlFor="message">Share Your Thoughts</label>
                        <textarea name="message" cols="30" rows="1"value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button className="contact__btn btn-outline">Send Your Feedback</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
