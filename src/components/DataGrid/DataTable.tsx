import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StandardButton } from "../../parts/Button";
import { Data } from "../../Type";
import columns from "./columns";
export const DataTable: React.FC = () => {
  const [rows, setRows] = useState<Data[]>([]);
  const navigatation = useNavigate();

  //テーブルの一覧取得処理
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/users");
      setRows(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <SRightButton>
        <StandardButton
          text="追加"
          onClick={() => navigatation("/register")}
          color="primary"
          variant="contained"
        />
      </SRightButton>
      <STable>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </STable>
    </>
  );
};

const SRightButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const STable = styled.div`
  height: 400px;
  width: "80%";
`;
