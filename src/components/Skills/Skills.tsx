import { Box } from "@material-ui/core";
import Title from "../Extra/Title";
import IconTech from "./IconTech";

const Skills = () => {
  return (
    <Box id="skills" pt={12}>
      <Box pb={7}>
        <Title title="Skills" />
      </Box>
      <IconTech />
    </Box>
  );
};

export default Skills;
