
import { Container } from "@material-ui/core";
import Arrow from "./components/Extra/Arrow";
import Title from "./components/Extra/Title";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import useStyles from "./styles/App";

function App(): JSX.Element {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Navbar />
      <Container maxWidth="lg" className={classes.wrapper}>
        <Home />
        <Arrow />
        <Title title="Skills" />
      </Container>
    </div>
  )
};

export default App;
