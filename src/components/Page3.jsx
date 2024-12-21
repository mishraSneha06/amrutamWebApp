import React from 'react';

import Heading from './Heading';
import { InView } from 'react-intersection-observer';

const Page3 = () => {
    return (
        <div className="bg-[#FAF5E4] py-12 px-4 md:px-12 min-h-screen w-[100vw] box-sizing-border-box">
            <Heading title="What sets Ayurvedic Consultations apart?" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Block 1 */}
                <InView 
                    triggerOnce={true} 
                    threshold={0.5} // 50% of the element must be in view
                >
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-500 ease-in-out ${
                                inView ? 'opacity-100 transform scale-105' : 'opacity-0 transform scale-95'
                            }`}
                        >
                            <h3 className="text-2xl font-bold text-[#2F5D2F] mb-4">
                                स्वास्थ्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
                            </h3>
                            <p className="text-gray-700">
                                [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                            </p>
                        </div>
                    )}
                </InView>

                {/* Block 2 */}
                <InView 
                    triggerOnce={true} 
                    threshold={0.5}
                >
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
                                inView ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src="https://s3-alpha-sig.figma.com/img/176b/ed5d/116ec373d4d09fe1dc2dad43869868d9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O3CmKhtOBwYlNU-AiCwmFs-H9NgXHmQnlnW0UdBcUra9SBK0tKz7WURODOts7Z~2abRbtlWIIcgZ1vjTb4X4W5dSgeGV2dzDYp59U4Oc8tm7NdTrLAO6D1haCFqxf6kA2uEKgFPRBxCCvKvfLpyatA3AwifACYt~elGbGhsxcjYEU9rqOL0zdnOfFuivgCSZ0kSkYZfr3-FQ8PzmyPnp5pP5E6VNn8dFgyxNfXRTctAnFkSjWbbo8HMz7lhMlV4C9-QYbea0G81RsDQHmUaXhL~TzwIu3GgAml5TTvKAtEGT5b4QO3xWYsYdvsvo9pn15uEkXNdv5~r2C7~7G1Ufpw__"
                                alt="Ayurvedic Consultation"
                                className="w-full h-56 object-cover"
                            />
                        </div>
                    )}
                </InView>

                {/* Block 3 */}
                <InView 
                    triggerOnce={true} 
                    threshold={0.5}
                >
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out ${
                                inView ? 'opacity-100 transform scale-105' : 'opacity-0 transform scale-95'
                            }`}
                        >
                            <h3 className="text-xl font-bold text-[#2F5D2F] mb-2">Precise Diagnosis</h3>
                            <p className="text-gray-700">
                                Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                            </p>
                        </div>
                    )}
                </InView>

                {/* Block 4 */}
                <InView 
                    triggerOnce={true} 
                    threshold={0.5}
                >
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out ${
                                inView ? 'opacity-100 transform scale-105' : 'opacity-0 transform scale-95'
                            }`}
                        >
                            <h3 className="text-xl font-bold text-[#2F5D2F] mb-2">Zero side-effects</h3>
                            <p className="text-gray-700">
                                Ayurvedic treatments are devoid of chemicals and are based completely on natural herbs.
                            </p>
                        </div>
                    )}
                </InView>

                {/* Block 5 */}
                <InView 
                    triggerOnce={true} 
                    threshold={0.5}
                >
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
                                inView ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src="https://s3-alpha-sig.figma.com/img/23ad/ed32/94aa2a9dd47c19df140900a908a8c26c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSadSb9wwmsNazPhmL~VP~QqFG-~DdqYWxeNTHZU4hAixHrAgXlQVHslDeDFLIXUXiMDOCcUVJPAJSLEPTEVZKb0Vq76ehyq5q6~X485hUtiY-x9U9e-w7vdS3WWl4QAT3OX4JNhnpcBZ3tHH0HFK4AdlD6F81IAXEC67zip2LpaDme5i~ygHkcMWanls2Gn7aYWTqV5UKYMYvj8BJcllX1gbj8hF71hJnR2t80-krqtSqIgfEKdDQvDTYhWpYDPV9xWgcQFL1ZXiYdckNnntdmBP0f9oxdG-Y-hlDLNrHbxTrXy84AAKqgS-zYbRXe2k4kD7OoGiWGMhgsER~Ud2g__"
                                alt="Ayurvedic Products"
                                className="w-full h-56 object-cover"
                            />
                        </div>
                    )}
                </InView>

                {/* Block 6 */}
                <InView 
                    triggerOnce={true} 
                    threshold={0.5}
                >
                    {({ inView, ref }) => (
                        <div
                            ref={ref}
                            className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out ${
                                inView ? 'opacity-100 transform scale-105' : 'opacity-0 transform scale-95'
                            }`}
                        >
                            <h3 className="text-xl font-bold text-[#2F5D2F] mb-2">Individual Treatment</h3>
                            <p className="text-gray-700">
                                All treatments are personalized based on a person's unique constitution and health concerns.
                            </p>
                        </div>
                    )}
                </InView>

            </div>
        </div>
    );
};

export default Page3;
