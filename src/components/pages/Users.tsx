/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { Box, Button, Grid } from "@mui/material";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await Axios.get("http://localhost:3001/users/");

    setUsers(result.data);
  };

  return (
    <>
      <Box sx={{ height: 1000, width: 1200 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Box>
    </>
  );
};
