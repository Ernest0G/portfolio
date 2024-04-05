import { About, Projects, Experience } from "./pages";
import { NavItem } from "./components";

function App() {
  return (
    <>
      <nav className="w-full max-w-full flex flex-row h-16 sm:h-20 justify-between sm:px-5 bg-black sticky top-0 z-50 border-b-2 border-white">
        <ul className="w-full flex flex-row no-wrap gap-3 sm:gap-10 items-center justify-center sm:justify-end">
          <NavItem item={"About"} />
          <NavItem item={"Experience"} />
          <NavItem item={"Projects"} />
          {/* <NavItem item={"Contact"} /> */}
        </ul>
      </nav>
      <br></br>
      <main className="w-full flex flex-col">
        <About />
        <br></br>
        <Experience />
        <br></br>
        <Projects />
        <br></br>
        {/* <Contact /> */}
      </main>
    </>
  );
}

export default App;
