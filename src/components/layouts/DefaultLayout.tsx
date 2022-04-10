import {Alert, Box, Grid, Snackbar} from "@mui/material";
import {Outlet, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {MessageContext} from "../../context/MessageContext";

export const DefaultLayout = () => {
  const { message, setMessage } = useContext(MessageContext);
  const location = useLocation();

  useEffect(() => setState({ ...state, open: !!message }), [message]);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  useEffect(() => {
    setMessage("");
  }, [location.pathname]);
  return (
    <Box sx={{ height: "100vh" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>

      <Grid
        container
        justifyContent="center"
        alignContent="center"
        height={"100%"}
      >
        <Grid item xs={12}>
          <main>
            <Outlet />
          </main>
        </Grid>
      </Grid>
    </Box>
  );
};
