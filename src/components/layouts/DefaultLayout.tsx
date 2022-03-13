import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Box>
      <main>
        <Outlet />
      </main>
    </Box>
  );
};
