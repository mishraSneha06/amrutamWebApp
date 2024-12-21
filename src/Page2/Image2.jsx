
import React from 'react';

const Image2 = () => {
  const Feature = ({ title, description, image, bgColor }) => {
    return (
      <div className="flex flex-col items-center mb-8 transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <div className={`text-4xl mb-2 h-20 w-20 rounded-full bg-bgColor transition-transform ease-in-out transform hover:scale-105 duration-700 hover:shadow-2xl p-4`}>
          <img className='rounded-full' src={image} alt={title} />
        </div>
        <h2 className="font-bold text-lg mb-1 text-gray-800 transition-all duration-500 ease-in-out hover:text-gray-600">{title}</h2>
        <p className="text-gray-600 text-sm text-center max-w-xs transition-all duration-500 ease-in-out hover:text-gray-800">{description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center items-center mt-10 gap-8">
      {/* Left Side Features */}
      <div className="flex flex-col gap-8 animate-fade-in-left">
        <Feature
          title="Personalized Wellness"
          description="Get treatments made just for you based on your individual doshas (body type)."
          image="https://s3-alpha-sig.figma.com/img/8567/a17c/ce30a4f9be32f98dae27064431959708?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2K2UNFU-atZtdELZ7sIbt5Nu0JHopIJRYSkujOP9d5aDShrEqAz7jqghzNfF80st8j6BJpOb88EpXga1Cnzo4MGfvGuANxvouRTGkrwTa47uHxz6c0BsooMJCj4E1R7-Klr16P3V0eANJHmAXeGIs6QOh~00eiahctOzofbKyt9In2Q~cSXmawPwpRK1En7hb6LuMW3c5rHrCEWCa1ARwWCXctpzbd-HREZpQ8wrRKLG4-Ezw48JJyt9yosUqNoiAW~VmbEI2kAQ4XFBpF8CC1DETKQJeEZ3~LV5uYjZs3p26URvsFtgbMAqgizkk4wx2TKGxrAvlW-qbFs~TczfA__"
          bgColor='#EDF5FA'
        />
        <Feature
          title="Holistic Healing"
          description="Fix the root problem for long-lasting health."
          image="https://s3-alpha-sig.figma.com/img/2879/63ec/4b701523b3665b8db7fd2b6067eebff8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eTTd5PEnAOUHQlyqlFSQ9ZVXOFSr5veNJQNKR-nbUBhUItrzX84U0gBZVqC9fYkqKFsjvPXiI2XGEE05gfw9yUH8YY4o2Jy6CGsKpYyNzmeWarGYjwnVeY4vgWJp6Ce1wl3YgRLpafBlBI8vOB2niGXCPAd5Nq~luoOQffOOObzr-lTMhMeEK6dNN55OOjwW7QMtv36raCADg3XU0CpauAnlz~BHZl2tSVWjazh3CLxBKrbKUdf-vnFffxKA4DfcGiH2OpyvluAyemKEI4vC-O~c8rlpszkapGs6JLI6jXhuw8nQMjIeFGVvEAzQomilH2HCMIJQRQSe5E3MhBq~8w__"
          bgColor={'bg-#EDF5FA'}
        />
        <Feature
          title="Focus on Prevention"
          description="Stop problems even before they start."
          image="https://s3-alpha-sig.figma.com/img/2505/8cf0/56734e9ae68adcdb9d2f0667d457f069?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q9gviOYqAZmn~ViWMaGgetKWmp8NiU7iuXrs4a-lLyOi6IJVvIHPaicXl4bPYQTM2zwi8u2WGbMAJZF0y5Dv10CUxnXYLwxp6oMHTMey9q9pC8e0SFLcHFJIakWjMLVkov1H3j~x-WteWrO-p8l20kjhdwE439etnaSIM1Z-7T0FB5WRKOHBB10Y7rX3L9QRiLftYOkyADRmQukr0wXSXWIOm0VOS-9UwoktT9LSrs~6~YOWLfsEXjzVeSMU~iQXfKeBDfK1WVLfhYRclX8vF22LNkZ4SdacySpg-Dyjw8TWwDPXtHaXgTXMSeXG0m2cGnC8rGNIBZ9Mb1xIWG-iyQ__"
          bgColor='bg-#FCF1F1'
        />
      </div>

      {/* Centered Image */}
      <div className="relative flex justify-center items-center w-[300px] h-[300px] transition-all duration-700 ease-in-out transform hover:scale-105">
      <img
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        src="https://s3-alpha-sig.figma.com/img/328a/02bf/246a02b2aac7549c73dbe7dacc8e2553?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AcpNoRRMVHSjTVAz8ojJG6ss2oryK0OXcDoaG5OQzg4GVB87XiE92djyD~MlU72AXN~-wRow7Iow-do1FR5M7VJkJ-Ilk1nhirasx7AM-550hKABD2EYOSQe~thw0PMO7zmkUhA0GYChSSS1yCdVKl9-iEKkSlPY0pJi4EYWhVYejclLBGjT7Si6kG0SY-WRipVRSBAJlQf1bu192R-HHw~NRaHLD3z1~E7wtR4rdSuELpBMg0OCVhU2fE6FwTPgz4l3ZokcrtuyrPkKeyohAmpsR3U4Q9gMM43DVK9FnQPisuRH6mGXHfpOghLOFa03jVVi9YuR67RuS4eqyizc4g__"
        alt="Background Illustration"
      />
      {/* Foreground Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-contain z-10 transition-all duration-700 ease-in-out transform hover:scale-105"
        src="https://s3-alpha-sig.figma.com/img/940c/90b2/b036ab89705f9413d552418bf0f9fa8f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNENf1nQaTZtff5tmHm9xnwWtH48Y~dvo9MiZFYBS6AEkuLsnbN7FxbmlOSn-SEDVGqX9D1rWCLekX3FEZC4FEbSf37cbmO~QnmiUbVqrVpe0-JN7jv~OLMDBlC4GDQV~Pt54nJCkemYfTZwz2se6OjLs5-rotD8rrM00~eziCWtYBkdEYTpMmPr29LdubTG7ww0KdlxLMvBNOaoPX-l8EQrX0Yn5K~srQuoJCu01jaPfYHBFY4Bv-00jgO4xWHqOhKZZD2WY50KX3oJCZdAytwExLRlUh526f~JuBS7nQArzz2F3CI0nvcos0WVyNyodq7iLTs8Ui96QSnwP6hVBQ__"
        alt="Foreground Illustration"
      />
      </div>

      {/* Right Side Features */}
      <div className="flex flex-col gap-8 animate-fade-in-right">
        <Feature
          title="Natural Remedies"
          description="Using herbs and natural therapies for healing."
          image="https://s3-alpha-sig.figma.com/img/4e2b/af21/22cc0c69eccc3be8038fe8ac40f9371f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPmhaKBhDdqmHR1eFbu7UG1fo2KkkEun62EMcWD3VR3zZ2ZuecajdqC6f1J8YAFUZW38En8AR~nazkBCZ6AZuLPQXqVCZy5x-IMR0ljOZSUSsd9BXoCYc3jlXsXSv9pk91rHlWR89amZNNVg7ygtemX3z4~mUIySiy7fBlWiE31zCncbZ8Uj9i4p~1KTse0N-EpldgjkCDTh4jR-dx6BNUUA6FNaxI~DfWqxJsnFUvmdnPIJJLrPQU7FwAUgvhawoFW1nH26qMUEHU3x0ONd24IiIKgz85XP8TXD4gBl3efHIo4K-JNaK8KrnQx2zkTLQrN8bIGgh8nB9hAthjaiAA__"
          bgColor='bg-#F5F3FC'
        />
        <Feature
          title="Mind-Body Connection"
          description="Keep your mind and body in sync for a happy life."
          image="https://s3-alpha-sig.figma.com/img/8d96/7947/07f25886ba1078a16b73185d5f869ad8?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YEu2WHP2CxHPaFj2gxhTKs0USufnBPmggqJ2wzVDTmGyJwbEUuluEpT3SaNtXRDkVvC2PNRvuNHZWf2x7Msyn2siQElNH5g09py0J6qcB29Mt2pvJuE11tvaj2YY6WAlSO9esc8-X4uwfo49-1s2gi~NXQJRbAnaW46NchiFC9f4GtioBbyaj0iQKoDlEguYG-fGgNTFXcyY52U5kYBeW~wT~d-2BOMt8HnB5VVe2FhdFwCA2AWeHcfqtlhbK--BbOCkWJWbcH3gdw16y5sXJT~p3TdOT8el8D7lSMr-DSlwQVyU9h4WK1szKjVZrvSxHkB0JGqP8yWlaM49ajTmcg__"
          bgColor='bg-#F5F3FC'
        />
        <Feature
          title="Ancient Wisdom"
          description="Learn from Ayurveda's thousands of years of tradition."
          image="https://s3-alpha-sig.figma.com/img/8cfd/d829/c4e732142f1ed180d4de142f4047a6ea?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YAGXLySzHHlhkPQ0cY1Nmh3NNAOcy~L903WHnQl4bGjkzwkuzSckHRHaJLUnoOY4J99djKSUHzhzusEbVSizSkDW~nKy7Ohzh6JMeGPhoiR-OKzUMIo~B3n5OGNAMxxnNCIcxzPVg22pojs27aDtX4~BQoX3CgiO9nhhMoB2050NLpBDwYyaPQVvfjzJQ~oNZRNhFbu32pTMJaAVxt20zn03VLt2TSfmAzd3gUD9kerzReyTcHKUOYBUIKh1TUz852nRL18SmnH2SeBxBYti8~zqdWM2r~B7wlD53Rf-GmkZTVhZCG7xypD0fAtS4ySIKdOPa539r~skgZ6k3r3mbA__"
          bgColor='bg-#F5F3FC'
        />
      </div>
    </div>
  );
};

export default Image2;