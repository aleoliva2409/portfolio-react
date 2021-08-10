
import { Container } from "@material-ui/core";
import Contact from "./components/Contact/Contact";
import Arrow from "./components/Extra/Arrow";
import Footer from "./components/auxiliar/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import useStyles from "./styles/App";

function App(): JSX.Element {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Navbar />
      <Container maxWidth="lg">
        <Home />
        <Arrow />
        <Skills />
        <Arrow />
        <Projects />
        <Arrow />
        <Contact />
      </Container>
      <Footer />
    </div>
  )
};

export default App;
