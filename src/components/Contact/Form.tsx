import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { useForm, ValidationError } from "@formspree/react";
import Alert from "@material-ui/lab/Alert";
import { useStyles, Input } from "./FormStyles";

const Form = (): JSX.Element => {
  const [state, handleSubmit] = useForm("mjvjaqkn");
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const openAlert = (): void => {
    setOpen(true);
  };

  const handleClose = (e?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const IAlert = (props: any): JSX.Element => {
    return <Alert elevation={6} variant="filled" {...props} />;
  };

  useEffect(() => {
    if(state.succeeded && !state.submitting) {
      openAlert()
    }
  }, [state.succeeded,state.submitting])

  return (
    <Box component="form" onSubmit={handleSubmit} width="100%" mt={7} >
      <Box className={classes.formInput}>
        <Input
          id="name"
          name="name"
          type="text"
          label="Nombre"
          variant="outlined"
          margin="normal"
          fullWidth
          className={classes.input}
          required
        />

        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </Box>
      <Box className={classes.formInput}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Correo Electronico"
          variant="outlined"
          margin="normal"
          fullWidth
          className={classes.input}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Box>
      <Box className={classes.formInput}>
        <Input
          id="message"
          name="message"
          type="text"
          label="Mensaje"
          variant="outlined"
          margin="normal"
          fullWidth
          rows={6}
          multiline
          className={classes.input}
          required
        />
        <ValidationError
          prefix="Mensaje"
          field="message"
          errors={state.errors}
        />
      </Box>
      <Box className={classes.formInput} py={2}>
        <Button
          variant="contained"
          color="primary"
          disabled={state.submitting}
          fullWidth
          size="large"
          type="submit"
        >
          Enviar mensaje
        </Button>
      </Box>
      {state.submitting && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      <Snackbar open={open} onClose={handleClose}>
        <IAlert onClose={handleClose} severity="success">
          Mensaje enviado!
        </IAlert>
      </Snackbar>
    </Box>
  );
};

export default Form;
