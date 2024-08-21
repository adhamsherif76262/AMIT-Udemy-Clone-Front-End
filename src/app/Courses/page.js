// import React from 'react'
// import axios from 'axios';
// import CoursesSection from './CoursesSection/page';
// async function Courses() {

//   const CourseIntroResponse = await axios.get(`http://localhost:5000/Array`)
//     const courseIntro = CourseIntroResponse.data

//     const TabsResponse = await axios.get(`http://localhost:5000/HomePageTaps`)
//     const Tabs = TabsResponse.data
//     return (
//       <>
//         <CoursesSection  CourseIntro={courseIntro} TabNames = {Tabs}></CoursesSection>
//     </>
//   )
// }

// export default Courses

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CoursesSection from "./CoursesSection/page";

function Courses() {
  const [courseIntro, setCourseIntro] = useState(null);
  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CourseIntroResponse = await axios.get(
          "http://localhost:5000/Array"
        );
        setCourseIntro(CourseIntroResponse.data);

        const TabsResponse = await axios.get(
          "http://localhost:5000/HomePageTaps"
        );
        setTabs(TabsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!courseIntro || !tabs) {
    return <div>Loading...</div>; // Ensure data is fetched before rendering child component
  }

  return (
    <>
      <CoursesSection CourseIntro={courseIntro} TabNames={tabs} />
    </>
  );
}

export default Courses;
