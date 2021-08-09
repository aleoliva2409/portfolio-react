
import { Container } from "@material-ui/core";
import Arrow from "./components/Extra/Arrow";
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
        <Arrow />
        <Arrow />
        <Arrow />
        <Arrow />
      </Container>
    </div>
  )
};

export default App;
