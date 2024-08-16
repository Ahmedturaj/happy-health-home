import React from "react";
import { Tilt } from "react-tilt";
import FAQPoster from "../../../assets/Shiny Happy - Doctor Prescription (1).png";
import HPicture from "../../../assets/Open Peeps - Standing.png";

const FAQ = () => {
  const bounceStyle = {
    animation: "bounce 1s infinite",
  };

  const keyframes = `
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
    `;

  return (
    <div className="my-24">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="900"
        className="flex items-center justify-center w-full"
      >
        <div className="flex justify-center items-center gap-2">
          <img src={HPicture} alt="" className="w-14" />
          <h2 className="text-2xl border-t-2 rounded-es-xl rounded-se-xl border-cyan-500 border-b-2 py-3 text-center w-80 font-extrabold text-cyan-500 bg-black bg-opacity-15">
            FAQ
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-11/12 mx-auto">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="900"
          className="w-full md:w-6/12"
        >
          <style>{keyframes}</style>
          <Tilt
            className="background-stripes duration-200 parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <img
              src={FAQPoster}
              style={bounceStyle}
              className="rounded-3xl w-full"
            />
          </Tilt>
        </div>
        <div className="w-full  md:w-6/12">
          <div className="collapse collapse-arrow bg-blue-300 mb-5 bg-opacity-55">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is "Happy Health Home"?
            </div>
            <div className="collapse-content">
              <p>
                "Happy Health Home" is your trusted online pharmacy, offering a
                wide range of medicines and healthcare products at your
                convenience.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-blue-300 mb-5 bg-opacity-55">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I order prescription medicines online?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can easily order prescription medicines online. Just
                upload your prescription, and we’ll take care of the rest.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-blue-300  bg-opacity-55">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do you offer home delivery?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! We provide fast and reliable home delivery for all
                orders, ensuring you get your medicines when you need them.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-blue-300  bg-opacity-55">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I track my order?
            </div>
            <div className="collapse-content">
              <p>
                You can track your order through our website or app. Once your
                order is placed, you'll receive a tracking link to monitor its
                status in real-time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-blue-300  bg-opacity-55">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What types of products do you offer?
            </div>
            <div className="collapse-content">
              <p>
                We offer a wide variety of products, including prescription
                medicines, over-the-counter drugs, wellness products, and
                medical devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
