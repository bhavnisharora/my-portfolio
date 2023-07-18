import { useContext } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Intro from "./components/into/Intro";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
import Work from "./components/works/Work";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Work />
        <Profile />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
