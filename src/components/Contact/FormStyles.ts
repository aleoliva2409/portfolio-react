import { makeStyles, createStyles, Theme, withStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    formInput: {
      width: "90%",
      margin: "0 auto",
      [theme.breakpoints.up("sm")]: {
        width: "80%"
      },
      [theme.breakpoints.up("md")]: {
        width: "75%"
      },
      [theme.breakpoints.up("lg")]: {
        width: "65%"
      },
      [theme.breakpoints.up("xl")]: {
        width: "60%"
      }
    },
    input: {
      backgroundColor: "#fff",
      borderRadius: "5px",
    }
  })
))

const Input = withStyles({
  root: {
    '& label.Mui-focused': {
      color: "#310A90",
      backgroundColor: "#fff",
      fontSize: "1.25em",
      borderRadius: "3px",
      padding: ".15em",
      border: "1px solid #310A90"
    },
    '& label': {
      color: "#310A90",
      backgroundColor: "#fff",
      borderRadius: "3px",
      padding: ".1em .16em",
    },
    "& .MuiOutlinedInput-root": {
      '&:hover fieldset': {
        borderColor: '#310A90',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#310A90',
      },
    }
  }
})(TextField)

export {
  useStyles,
  Input
};