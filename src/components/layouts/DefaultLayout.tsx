import { Alert, Box, Snackbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../../context/MessageContext";

export const DefaultLayout = () => {
  const { message } = useContext(MessageContext);
  useEffect(() => setState({ ...state, open: !!message }), [message]);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const{open} = state

  const handleClose = () => {
    setState({ ...state, open: false });
  };
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
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
