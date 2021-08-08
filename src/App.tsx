
import { Container } from "@material-ui/core";
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
      </Container>
    </div>
  )
};

export default App;
