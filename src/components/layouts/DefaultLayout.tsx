import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
