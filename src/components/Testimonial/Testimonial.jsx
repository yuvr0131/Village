import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Ajay Rumo",
    text: "I recently stayed at the River View Hotel and had an exceptional experience. The service was top-notch, with the staff going above and beyond to ensure my comfort. The owners were incredibly welcoming and made me feel like part of the family. The hotel was also very kid-friendly, with a dedicated play area and activities for children.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Shivanshu Raj",
    text: "We stayed here twice on our recent trip and it could not have been better.  Rooms are large, clean, and well maintained. But, most importantly, it feels like coming home. Such a welcoming family and a great place to stay.Thank you again and Happy Losar!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Eliezer Hembrom",
    text: "The food at the hotel was outstanding, with a variety of delicious options to choose from. I especially loved the breakfast buffet overlooking the river - it was a truly magical experience. Overall, I would highly recommend the River View Hotel for anyone looking for a relaxing and enjoyable stay. Five stars all around!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Jamiri in West Kameng, Arunachal Pradesh, is a hidden gem that
              offers a unique blend of natural beauty and cultural richness.
              Nestled amidst stunning mountain landscapes, this serene village
              provides a peaceful retreat for those looking to escape the hustle
              and bustle of city life.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
