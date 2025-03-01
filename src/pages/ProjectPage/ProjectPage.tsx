import Footer from "../../components/Footer/Footer";
import Title from "./components/title/Title";
import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="project-page-container">
      <Title />
      <div
        style={{
          //   width: "100%",
          height: "100vh",
        }}
      ></div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
