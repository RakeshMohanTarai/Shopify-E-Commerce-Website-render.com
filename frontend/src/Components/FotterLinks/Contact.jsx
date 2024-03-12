import React from 'react';

const Contact = () => {
    return (
        <div style={{
            width: '60%',
            padding: '20px',
            borderRadius: '8px',
            margin:'auto',
            marginTop: '60px',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(to right, #84fab0, #8fd3f4)', /* Gradient color */
        }}>
            <h1 style={{ color: '#fff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>Contact Us</h1>
            <div style={{ marginTop: '30px', color: '#fff', lineHeight: '1.6' }}>
                <p>
                    Have a question or inquiry? We'd love to hear from you! Reach out to us using the contact information below:
                </p>
                <p>
                    <strong>Email:</strong> rakesh.mohandj@gmail.com
                </p>
                <p>
                    <strong>Phone:</strong> +917978298211
                </p>
                <p>
                    <strong>Address:</strong> Bhubaneswar, Odisha, India
                </p>
                <p>
                    Our customer support team is available to assist you Monday to Friday, 9:00 AM - 6:00 PM (PST).
                </p>
                <p>
                    Connect with us on social media:
                </p>
            </div>
        </div>
    );
}

export default Contact;
