import { Box } from "@material-ui/core"
import Title from "../Extra/Title"
import ProjectCard from "./ProjectCard"

const Projects = (): JSX.Element => {
  return (
    <Box
      id="projects"
    >
      <Box pt={12} pb={7}>
        <Title title="Proyectos"/>
      </Box>
      <ProjectCard />
    </Box>
  )
}

export default Projects
