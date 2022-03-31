import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import columns from "./columns";
const DataTable: React.FC = () => {
  const [row, setRow] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/users/");
      setRow(response.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: 400, width: "80%" }}>
      <DataGrid rows={row} columns={columns} pageSize={5} />
    </div>
  );
};
export default DataTable;
