import React from 'react';
import BottomCompo from '../Page1/BottomCompo';
import NavBar from '../Page1/NavBar';

const Page1 = () => {
    return (
        <>
            <NavBar />
            <section className="relative bg-[#FAF5E4] text-black h-full w-full box-border">
                <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-4 sm:px-6 md:px-12 bg-red-900 w-full">
                    {/* Left Text Content */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 text-white animate-fade-in-left">
                        <h3 className="text-lg mb-4">Namaste, Welcome to Amrutam</h3>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                            Step into Holistic Healing with{' '}
                            <span className="text-yellow-400">Ayurveda</span>
                        </h1>
                        <p className="text-gray-300 mb-8">
                            Dive into the world of Ayurveda and experience personalized health
                            solutions and holistic guidance from trusted Ayurvedic doctors
                            anytime, anywhere.
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 transition-transform transform hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg">
                            BOOK AN APPOINTMENT
                        </button>
                    </div>

                    {/* Right Image Content */}
                    <div className="w-full md:w-1/2 shadow-2xl animate-fade-in-right">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/c1af/953f/807faed30071845860b212ed47717559?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyIWbUo6BPdQO7MdUsklKzvRCi~wBxGDBAwnu5CUaQRmsmpYgNtZaESzkRIVrStwjnYvARl1Py29UG~a~36bPXmASt37GDcReKOdguKF789Ix1rA6n-9I29FaO72eMrOHo-l7RNkSaxitkuqX5HO3IDDGQwKdStFYv8N~L7Z2VlVGMZmtjfk-mzD4GxfduzhbwG3~l80iBCCTVSnXTMH-BAwuhcsgaYuyXkA~dnN6sTiBIYnj6BVlCnAw8GdudNhCNXa-nq6gVSNDMFksLXvA-3Q0LHRH3AUTgD1WPl7eElXx9TfizggFkXc6WUsldsVDwuqZjUrGJTo5042XyteGg__"
                            alt="Holistic Healing"
                            className="w-full rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105"
                        />
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-yellow-50 py-8 px-4 sm:px-6 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {/* Benefit 1 */}
                        <div className="animate-fade-in-up delay-100">
                            <BottomCompo
                                image="https://s3-alpha-sig.figma.com/img/f4ba/b0ae/b3be65721ad15db48b42ced1fe1add76?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ja9OVeu~pZTFahQbmDGaMF6wWdnA83YKhE-SffE5LyNgBV~88fKR4IsvCWzjfjEGl84HQXwXdoXF0VQbw01cI5kuAR7a1c35htAZxDzWTS9CwaztOvwStRPU8ZK1gUuQOrIv8sd2jY~cFsmhCg89js~Zdwhiz8ITll2KVol1IOrhF4D063W5xiuPcJQAOBGcGqsPrVB-7Xl55IMQTz-aJ-ARqEkW6nNrcpqDYIzyYnM46Z7M1IaJAfTNhR6TF97trQ4Z2P3koa43EzAhUvvF2bLGI5GIcGgW19vapUsMbkmE94VV-0KCGHsAMZvi80cSo-IkANho69-VzB9Z6qCuIg__"
                                description="Convenient Online and In-Clinic Consultations"
                            />
                        </div>

                        {/* Benefit 2 */}
                        <div className="animate-fade-in-up delay-200">
                            <BottomCompo
                                image="https://s3-alpha-sig.figma.com/img/2c5e/d627/8cf1f869d2e948b71cdcdb14c7c4413f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gmgaQ1EIdmZEkGX4BeXIBYLg9NnusiVizUO6aeBvLlufHFYLMnrd7JbF7A5aqgXvf-EiPgIlg9C49f9ych7WH6U9JDADE7WfuYqX-k5cdJJY0ag4~eZJBOA62hCR7h6b1a01tX4tTpo3q4TwjxIvvu0aV6MKWgs9pX0Ohd7Lpi-Sp-I5shsnrG2hdSPV5ILsOhctR-BMj9OpBN18-FMiGtWQjG~JFcSp~bz9fPAJqAs2aGJSYGV5WMBo728vTO0ulgGT2-nK6aFAwHHnfWBTt7RgCmqO9q1TiT-4-Xe7fIG3ksUUqnmM8LQzC9WsDjYacczEiMtkUWXwzPHLt5mogw__"
                                description="Safe and Effective Treatment"
                            />
                        </div>

                        {/* Benefit 3 */}
                        <div className="animate-fade-in-up delay-300">
                            <BottomCompo
                                image="https://s3-alpha-sig.figma.com/img/0854/69db/3d23d6085aab3b3dbe1b662f60051d85?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CG3eS61cKX2Dwd97urywzaKzW0EaaWG3gH6ZQOBGCVtnKXJ9ie~Xk24JAzuhhSwL320K80dZjAqUSIK-pmqUz9dcpn9MgIQ1R4wKJCal1LiIYi595v4t4OSazqfdG8pVRNKMaQoO0HGQZluwzM5iNWVNyHMcmA269ExMFa8MM9f~IE2~dq0v70b5cNKm2zUDoDvZbIe9-vl4iSh-y~TRv8kI2lW3BzQKIJ4LIbwreKYTbE-tmgzSFjwHTc70ZCzdgssfFgFL60f2eEwLvSk8-vBwFLPrqJswBMpvPWGtnctdd-p9ynLmrSMgBVudtfKqD7hGUnZcxffmc6cN7FkEoQ__"
                                description="Experienced Ayurvedic Practitioners"
                            />
                        </div>

                        {/* Benefit 4 */}
                        <div className="animate-fade-in-up delay-400">
                            <BottomCompo
                                image="https://s3-alpha-sig.figma.com/img/cd8d/62a9/52ed6e4cba8b811d1e2a2336dfc266d0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KtDtrq9w9RmQkKgj3kiVtt5gYLLcJP1NXLIsciU8VS05h4dpYpz-xIcQAo8tgSpzWGc4xPzdclyupKwxt0iOpxbk7pxneTjHiiSBcyxbcCuwpF5l3gXOeNXGVZb48LfQj4X83N6hfBo4JF5Ti2msWKJ6ItDOFQkzZz1uMFiGjW3buGxEerBbOixZAS6YcpBDBmrUYRhdCfBMTv7VEWSIN0W6VI57FbKemxYar2AICPgQotB9mWF63pSDRTjgeIwnTZ6rkACkRdrOlUdTmb4zpO3nRPiCxDa6TP73BUYH3k1JyMQK0s-DqD2lIohKf5YejYjAExNHTJQRNmbYzv8Urw__"
                                description="Personalized Health Solutions"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page1;
