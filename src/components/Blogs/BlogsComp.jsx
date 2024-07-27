import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/CO OFFICE.jpg";
import Img2 from "../../assets/places/GMS SCHOOL.jpg";
import Img3 from "../../assets/places/HOSPITAL.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "CO OFFICE",
    description:
      "The Circle Officer building stands as the administrative centerpiece of the local government, a vital institution where essential civic functions are managed and coordinated. This building is designed to facilitate efficient governance and is equipped with offices for various officials, meeting rooms for public consultations, and service counters for citizen inquiries.Within its walls, the Circle Officer and their team handle a range of responsibilities, from maintaining law and order to overseeing land and revenue matters, coordinating disaster management, and implementing development programs. The building also serves as a liaison point between the government and the community, providing a space where citizens can access crucial services, resolve issues, and obtain necessary permits and documentation.The Circle Officer building is more than just an office; it is a symbol of local governance, reflecting the commitment to public service, transparency, and community engagement. Its strategic location and accessibility ensure that it is a welcoming and functional space for all members of the community, fostering an environment of trust and collaboration between the government and the people it serves.",
    author: "Yuvraj Singh",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "GMS JAMIRI,H.Q.",
    description:
      "GOVT. MIDDLE SCHOOL JAMIRI HQ was established in 1994 and it is managed by the Department of Education. It is located in Rural area. It is located in SINGCHUNG-BHALUKPONG block of WEST KAMENG district of Arunachal Pradesh. The school consists of Grades from 1 to 8. The school is Co-educational and it doesn't have an attached pre-primary section. The school is N/A in nature and is not using school building as a shift-school. English is the medium of instructions in this school. This school is approachable by all weather road. In this school academic session starts in April.The school has Government building. It has got 9 classrooms for instructional purposes. All the classrooms are in good condition. It has 2 other rooms for non-teaching activities. The school has a separate room for Head master/Teacher. The school has Pucca boundary wall. The school has have electric connection. The source of Drinking Water in the school is Tap Water and it is functional. The school has 1 boys toilet and it is functional. and 1 girls toilet and it is functional. The school has a playground. The school has a library and has 234 books in its library. The school does not need ramp for disabled children to access classrooms. The school has 4 computers for teaching and learning purposes and all are functional. The school is not having a computer aided learning lab. The school is Provided and Prepared in School Premises providing mid-day meal.",
    author: "Yuvraj Singh",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "HOSPITAL Jamiri,H.Q",
    description:
      "The pharmacy located at Jamiri HQ in West Kameng, Arunachal Pradesh, serves as a crucial healthcare resource for the local community. Nestled in this remote yet scenic region, the pharmacy provides essential medical supplies, prescription medications, and over-the-counter remedies to residents and visitors alike. It plays a vital role in supporting the health and well-being of the community, offering knowledgeable advice and services from trained pharmacists. Given the area's geographical challenges, the pharmacy ensures that even the most remote populations have access to necessary healthcare products. Its presence is indispensable, contributing significantly to the overall healthcare infrastructure of Jamiri HQ and the surrounding areas in West Kameng.",
    author: "Yuvraj Singh",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Government Departments
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
