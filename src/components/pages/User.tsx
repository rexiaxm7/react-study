import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./User.css";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            'http://localhost:3001/users/',
        );

        setData(result.data);
    };

    fetchData();
    }, []);

    const deleteUser = React.useCallback(
        (id) => () => {
          setTimeout(() => {
            setData((prevRows) => prevRows.filter((data) => id !== id));
          });
        },
        [],
      );

    const columns = [
        { field: 'id', 
          headerName: 'ID', 
          width: 90 
        },
        {
          field: 'mail',
          headerName: 'メールアドレス',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: '年齢',
          type: 'number',
          width: 100,
          editable: true,
        },
        {
            field: 'job',
            headerName: '職業',
            width: 150,
            editable: true,
        },
        {
            field: 'gender',
            headerName: '性別',
            width: 100,
            editable: true,
        },
        {
            field: 'interests',
            headerName: '趣味',
            width: 200,
            editable: true,
        },
        {
            field: 'actions',
            type: 'Actions',
            headerName: '操作',
            width: 110,
        }
    ];


function editToolBar() {
    const handleClick = () =>{
    };  

    return (
        <Button className="addition" variant="contained" color="primary" onClick={handleClick}>
        + 追加
        </Button>
    );
};
        
return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      components={{
        Toolbar: editToolBar,
      }}
      //checkboxSelection
      //disableSelectionOnClick
    />
  </div>
);
}