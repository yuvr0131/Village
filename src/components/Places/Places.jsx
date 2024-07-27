import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/HAWA MAHAL 2.jpg";
import Img2 from "../../assets/places/Tourist House.jpg";
import Img3 from "../../assets/places/HOME STAY.avif";
import Img4 from "../../assets/places/monastery.jpeg";
import Img5 from "../../assets/places/nagmandir.jpg";
import Img6 from "../../assets/places/tunnel.jpeg";

const PlacesData = [
  {
    img: Img1,
    title: "HAWA MAHAL",
    location: "JAMIRI,AP",
    description:
      "A breathtaking mountain lookout offering panoramic views of rolling hills, lush forests, and distant peaks.",
    price: 500,
    type: "Tourist",
  },
  {
    img: Img2,
    title: "Tourist House",
    location: "JAMIRI,AP",
    description:
      "A cozy tourist house nestled in serene surroundings, perfect for relaxation and unwinding after a day of exploring.",
    price: 1000,
    type: "Lodging",
  },
  {
    img: Img3,
    title: "Home Stay",
    location: "Jamiri,AP",
    description:
      "A charming homestay enveloped by majestic mountains, providing a tranquil retreat and breathtaking views",
    price: 1000,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Monastery",
    location: "Jamiri Point,AP",
    description:
      "A serene mountain monastery offering spiritual tranquility and stunning alpine vistas.",
    price: 700,
    type: "Religious",
  },
  {
    img: Img5,
    title: "Nag Mandir",
    location: "Nagmandir,AP",
    description:
      "A sacred temple devoted to Lord Shiva, where devotion meets the divine in a tranquil and spiritual setting.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Nechiphiu Tunnel",
    location: "Zero Point,AP",
    description:
      "A newly-built 500-metre tunnel in Arunachal Pradesh will provide all-weather connectivity to the strategic Tawang region along the Line of",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
