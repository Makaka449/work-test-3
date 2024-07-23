import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        
        const formData = new FormData(event.currentTarget);
        const formObject: any = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

       
        console.log('Form Data:', formObject);
    };

    return (
        <footer className="footer">
            <div className="contact-form">
                <h2>Зворотний зв'язок</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Ім'я:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Електронна пошта:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Повідомлення:</label>
                    <textarea id="message" name="message" required></textarea>
                    
                    <button type="submit">Відправити</button>
                </form>
            </div>
            <div className="links">
                <div className='Logo'>
                <a href="/" className="logo">
                        <svg className='logo_svg' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5015 0C14.8423 0 11.2652 1.08009 8.22264 3.10371C5.18011 5.12731 2.80868 8.00353 1.40835 11.3687C0.00801569 14.7338 -0.358374 18.4367 0.355509 22.0091C1.0694 25.5816 2.83151 28.863 5.41897 31.4384C8.00645 34.014 11.3032 35.768 14.8921 36.4788C18.481 37.1893 22.201 36.8246 25.5818 35.4309C28.9626 34.0368 31.8518 31.6763 33.885 28.6478C35.918 25.6193 37.003 22.0587 37.003 18.4163C37.003 13.532 35.0538 8.84771 31.5841 5.39401C28.1143 1.94028 23.4085 0 18.5015 0ZM29.8666 21.1077C29.8666 21.476 28.1962 21.5286 28.1962 21.897C28.1962 22.2653 29.8483 22.7651 29.8483 23.273C29.8483 23.8938 26.4439 23.9858 26.4439 24.6068C26.4439 25.2699 29.0261 25.0645 29.0261 25.7828C29.0261 26.63 22.5402 26.2353 22.5402 27.1167C22.5402 27.4533 23.3702 27.5929 24.4089 27.7034C24.9798 27.7664 24.8554 28.0453 24.5305 28.2296C22.7147 29.3323 20.6287 29.9159 18.5015 29.9159C16.3744 29.9159 14.2884 29.3323 12.4726 28.2296C12.1502 28.0323 12.0233 27.7534 12.5942 27.7034C13.633 27.5929 14.4656 27.4403 14.4656 27.1167C14.4656 26.2353 7.97679 26.63 7.97679 25.7828C7.97679 25.0645 10.5617 25.2566 10.5617 24.6068C10.5617 23.9858 7.15484 23.8938 7.15484 23.273C7.15484 22.7651 8.80942 22.2732 8.80942 21.897C8.80942 21.5207 7.13633 21.4786 7.13633 21.1077C7.13633 20.7367 8.35745 20.4973 8.35745 20.2342C8.35745 19.737 6.93808 20.642 6.93808 18.4163C6.93808 15.3636 8.15642 12.4359 10.325 10.2774C12.4936 8.11878 15.4347 6.9061 18.5015 6.9061C21.5683 6.9061 24.5096 8.11878 26.6782 10.2774C28.8467 12.4359 30.0649 15.3636 30.0649 18.4163C30.0649 20.642 28.6457 19.7317 28.6457 20.2342C28.6457 20.4973 29.8666 20.7104 29.8666 21.1077Z" fill="url(#paint0_linear_3_35)"/>
                            <defs>
                                <linearGradient id="paint0_linear_3_35" x1="0" y1="0" x2="41.482" y2="6.0322" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6DDCFF"/>
                                    <stop offset="1" stopColor="#7F60F9"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <p>Super Cool</p>
                </a>
            </div>
                <a href="/">Products</a>
                <a href="/">Features</a>
                <a href="/">Comments</a>
            </div>
        </footer>
    );
};

export default Footer;
