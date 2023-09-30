import { Nav, About, Experience } from "./components";
import "./App.css";

function App() {
  return (
    <section id="container">
      <Nav />
      <main id="main-content">
        <h1 className="section-heading">About Me</h1>
        <About />
        <h1 className="section-heading">Experience</h1>
        <Experience />
        <h1 className="section-heading">Skills</h1>
        <h1 className="section-heading">Projects</h1>
        <h1 className="section-heading">Contact</h1>
      </main>
    </section>
  );
}

export default App;
