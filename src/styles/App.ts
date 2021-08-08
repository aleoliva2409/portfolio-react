import { makeStyles, createStyles } from "@material-ui/core";

const useStyles: Function = makeStyles(() => createStyles({
    container: {
      padding: "0px",
      background: "radial-gradient(41.48% 11.48% at 2.38% 8.52%, #747DE9 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(135deg, #72EDF2 0%, #5151E5 100%)",
      minHeight: "100vh",
    },
    wrapper: {
      margin: "4em auto"
    }
  })
)

export default useStyles;
