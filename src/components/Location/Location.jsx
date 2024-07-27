import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              className="border-0 w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14196.539262633298!2d92.58915724008094!3d27.183499261556666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37435797e73e98df%3A0x13e70091b007941a!2sJamiri%20790114!5e0!3m2!1sen!2sin!4v1721968559801!5m2!1sen!2sin"
              width="600"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
