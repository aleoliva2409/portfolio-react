import { Box } from "@material-ui/core";
import Title from "../Extra/Title"
import Form from "./Form";

const Contact = (): JSX.Element => {
  return (
    <Box id="contact" pt={12} mb={5} >
      <Title title="Hablemos" />
      <Form />
    </Box>
  )
}

export default Contact;
