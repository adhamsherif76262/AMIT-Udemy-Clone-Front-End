// 'use client';
// import React from 'react'
// import Styles from "../Courses.module.css"
// import "../CarouselStyle.module.css";
// import { useState, useEffect, useRef } from 'react';
// import Carousel from "react-elastic-carousel";
// import Rating from '../../Components/Rating';

// function CoursesSection({ CourseIntro, TabNames }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const firstBtnRef = useRef();
//   let TheCourse;
//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1000, itemsToShow: 4 },
//     { width: 1200, itemsToShow: 5 },
//   ];
//   // useEffect(() => {
//   //   firstBtnRef.current.focus();
//   // }, []);

//   return (
//     <>
//       <div className={`${Styles.CoursesSection}`}>
//         {JSON.stringify(CourseIntro)}
//         {JSON.stringify(TabNames)}
//       </div>
//       {/* <article className={`${Styles.StaticCoursesContent}`}>
//         <h1 className={`${Styles.M_Top}`}>A Broad Selection Of Courses</h1>
//         <p className={`${Styles.M_Top}`}>
//           Choose from over 220,000 online video courses with new additions
//           published every month
//         </p>
//         <div className={`${Styles.M_Top}`}>
//           {CourseIntro.map((item, index) => (
//             <button
//               ref={index === 0 ? firstBtnRef : null}
//               key={index}
//               onClick={() => setSelectedTab(index)}
//               className={`${Styles['Home_Tab']} ${Styles['M_Bottom']} ${selectedTab === index ? Styles.Bold : ""}`}
//             >
//               {item.TabName}
//             </button>
//           ))}
//         </div>
//       </article>
//       <div className={Styles.Courses_Mother_Div}>
//         {CourseIntro.map((item, index) => (
//           <div
//             key={index}
//             className={`${selectedTab === index ? "" : Styles.Hidden}`}
//           >
//             <h3 className={`${Styles.M_Top} ${Styles.CoursesH4}`}>
//               {item.header}
//             </h3>
//             <p
//               className={`${Styles.M_Top} ${Styles.CoursesH4} ${Styles.CourseDesc}`}
//             >
//               {item.description}
//             </p>
//             <button
//               className={`${Styles.M_Top} ${Styles.ExploreBtn} ${Styles["M_Bottom"]} ${Styles.CoursesH4}`}
//             >
//               <a
//                 className={`${Styles.ExploreBtnAnchor}`}
//                 href={`https://www.udemy.com/topic/${item.urlkey}/`}
//               >
//                 Explore {item.TabName}
//               </a>
//             </button>
//             <h4
//               className={`${Styles.CoursesH4} ${Styles["M_Top"]} ${Styles["M_Bottom"]}`}
//             >
//               {item.title}
//             </h4>
//             <div className="App">
//               <Carousel breakPoints={breakPoints}>
//                 {item.courses.map((course, index) => (
//                   <a
//                     key={index}
//                     href={`../../Courses/${course.id}`}
//                     className={`${Styles.Slides} ${Styles.ExploreBtnAnchor}`}
//                   >
//                     <img
//                       src={course.image}
//                       className={`${Styles.carouselImg}`}
//                     ></img>
//                     <div className="">
//                       <h5>{course.title}</h5>
//                       {course.instructors.map((instructor, index) => (
//                         <p key={index}>{instructor.name}</p>
//                       ))}
//                       <Rating rating={course.rating}></Rating>
//                       <div>
//                         <p class="Price">E&#163; {course.price}</p>
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </Carousel>
//             </div>
//           </div>
//         ))}
//       </div> */}
//     </>
//   );
// }

// export default CoursesSection


"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import Carousel from "react-elastic-carousel";
import Carousel from "../../../../node_modules/react-elastic-carousel/dist/index";
import Rating from '../../Components/Rating';
import Styles from "../Courses.module.css"
import "../CarouselStyle.module.css";

function CoursesSection({ CourseIntro, TabNames }) {

  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();
  // useEffect(() => {
  //   firstBtnRef.current.focus();
  // }, []);
  function Fill_Data(P_C){
      let TheCourse;
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
      ];
      return (
        <>
          {/* <div className={`${Styles.CoursesSection}`}>
            {JSON.stringify(CourseIntro)}
            {JSON.stringify(TabNames)}
          </div> */}
          <article className={`${Styles.StaticCoursesContent}`}>
            <h1 className={`${Styles.M_Top}`}>A Broad Selection Of Courses</h1>
            <p className={`${Styles.M_Top}`}>
              Choose from over 220,000 online video courses with new additions
              published every month
            </p>
            <div className={`${Styles.M_Top}`}>
              {P_C.map((item, index) => (
                <button
                  ref={index === 0 ? firstBtnRef : null}
                  key={index}
                  onClick={() => setSelectedTab(index)}
                  className={`${Styles["Home_Tab"]} ${Styles["M_Bottom"]} ${
                    selectedTab === index ? Styles.Bold : ""
                  }`}
                >
                  {item.TabName}
                </button>
              ))}
            </div>
          </article>
          <div className={Styles.Courses_Mother_Div}>
            {P_C.map((item, index) => (
              <div
                key={index}
                className={`${selectedTab === index ? "" : Styles.Hidden}`}
              >
                <h3 className={`${Styles.M_Top} ${Styles.CoursesH4}`}>
                  {item.header}
                </h3>
                <p
                  className={`${Styles.M_Top} ${Styles.CoursesH4} ${Styles.CourseDesc}`}
                >
                  {item.description}
                </p>
                <button
                  className={`${Styles.M_Top} ${Styles.ExploreBtn} ${Styles["M_Bottom"]} ${Styles.CoursesH4}`}
                >
                  <a
                    className={`${Styles.ExploreBtnAnchor}`}
                    href={`https://www.udemy.com/topic/${item.urlkey}/`}
                  >
                    Explore {item.TabName}
                  </a>
                </button>
                <h4
                  className={`${Styles.CoursesH4} ${Styles["M_Top"]} ${Styles["M_Bottom"]}`}
                >
                  {item.title}
                </h4>
                <div className="App">
                  {/* Should be <Carousel breakPoints={breakPoints}></Carousel>
                    But I had to change it because the hosting website Netlify.com Didn't
                    find the elastic carousel module*/}
                  <Carousel breakPoints={breakPoints}>
                    {item.courses.map((course, index) => (
                      <a
                        key={index}
                        href={`../../Courses/${course.id}`}
                        className={`${Styles.Slides} ${Styles.ExploreBtnAnchor}`}
                      >
                        <img
                          src={course.image}
                          className={`${Styles.carouselImg}`}
                        ></img>
                        <div className="">
                          <h5>{course.title}</h5>
                          {course.instructors.map((instructor, index) => (
                            <p key={index}>{instructor.name}</p>
                          ))}
                          <Rating rating={course.rating}></Rating>
                          <div>
                            <p class="Price">E&#163; {course.price}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </Carousel>
                </div>
              </div>
            ))}
          </div>
        </>
      );
  }

  const [courseIntro, setCourseIntro] = useState(null);
  const [tabs, setTabs] = useState(null);

  // if (!CourseIntro || !TabNames) {

        const fetchData = async () => {
          try {
            const CourseIntroResponse = await axios.get(
              "https://api.jsonsilo.com/public/42574ecd-1db4-4d34-a482-05b9ba9d7a11"
            );
            setCourseIntro(CourseIntroResponse.data["Array"]);
            setTabs(CourseIntroResponse.data["HomePageTaps"]);

            // const CourseIntroResponse = await axios.get(
            //   "http://localhost:5000/Array"
            // );
            // setCourseIntro(CourseIntroResponse.data);

            // const TabsResponse = await axios.get(
            //   "http://localhost:5000/HomePageTaps"
            // );
            // setTabs(TabsResponse.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
          fetchData();


      if (!courseIntro || !tabs) {
        return <div>Loading...</div>; // Ensure data is fetched before rendering child component
      }
      return (
        <div className="">
          {Fill_Data(courseIntro)}
          {/* <div className="">{JSON.stringify(courseIntro)}</div>
          <div className="">{JSON.stringify(tabs)}</div> */}
        </div>
      );
    // return <div>No data available</div>; // Handle the case where data is not yet passed down
  

  // console.log(CourseIntro); // Check if CourseIntro is being passed correctly
  // // Or render it to the UI to verify
  // return (
  //   <div>
  //     {Fill_Data(CourseIntro)}
  //     {/* <h1>Course Introduction</h1>
  //     <p>{JSON.stringify(CourseIntro)}</p>
  //     <p>{JSON.stringify(TabNames)}</p> */}
  //     {/* Render the TabNames if needed */}
  //   </div>
  // );
}

export default CoursesSection;

