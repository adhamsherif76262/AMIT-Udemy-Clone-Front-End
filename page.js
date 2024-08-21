import styles from "./src/app/page.module.css";
import Footer from "./src/app/Components/Footer";
import HeaderNavBar from "./src/app/Components/HeaderNavBar";
import SalesSection from "./src/app/Components/SalesSection";
import LogosSection from "./src/app/Components/LogosSection";
import TopCategoriesSection from "./src/app/Components/TopCategoriesSection";
import Courses from "./src/app/Courses/page";

export default function Home() {
  return (
    <main className="">
      <HeaderNavBar></HeaderNavBar>
      <SalesSection></SalesSection>
      <LogosSection></LogosSection>
      <Courses></Courses>
      <TopCategoriesSection></TopCategoriesSection>
      <Footer></Footer>
    </main>
  );
}
