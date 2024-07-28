import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <div className="font-bold">
        <Accordion
          title="1. What are the main attractions in Jamiri?"
          answer="Jamiri offers a variety of attractions, including lush green landscapes, traditional village life, and cultural experiences. Key spots include the local monastery, scenic hiking trails, and the vibrant local markets where you can purchase traditional crafts and organic produce."
        />
      </div>
      <div className="font-bold">
        <Accordion
          title="2. How can I reach Jamiri?"
          answer="Jamiri is accessible by road from Bomdila, the district headquarters of West Kameng. The nearest airport is Tezpur Airport in Assam, which is approximately 160 kilometers away. From Tezpur, you can hire a taxi or take a bus to reach Jamiri."
        />
      </div>
      <div className="font-bold">
        <Accordion
          title="3. What accommodation options are available in Jamiri?"
          answer="Jamiri offers several homestays and guesthouses run by local families, providing a cozy and authentic experience. These accommodations offer basic amenities and a chance to experience local hospitality and cuisine."
        />
      </div>
      <div className="font-bold">
        <Accordion
          title="4. When is the best time to visit Jamiri?"
          answer="The best time to visit Jamiri is from October to April when the weather is pleasant and ideal for outdoor activities. During these months, you can enjoy clear skies and comfortable temperatures, making it perfect for sightseeing and trekking."
        />
      </div>
      <div className="font-bold">
        {" "}
        <Accordion
          title="5. What activities can tourists engage in while in Jamiri?"
          answer="Tourists can engage in various activities such as trekking, bird watching, exploring local culture and traditions, visiting historical sites, and participating in village festivals. Nature enthusiasts can also enjoy the rich biodiversity of the region."
        />
      </div>

      <div className="font-bold">
        <Accordion
          title="6. Are there any local festivals or events that tourists can attend?"
          answer="Nyethrii-Dow is usually celebrated in the West Kameng district where the most of the Aka tribe resides. 6 Thrizino-Buragaon Constituency is the circle where one can witness this festival. Bhalukpong is a border town connecting Assam and is the gateway to Tawang and Bomdila."
        />
      </div>
    </div>
  );
};

export default FAQ;
