import axios from "axios";
import { useState , useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';

import Columns from "./Columns";


// eslint-disable-next-line import/no-anonymous-default-export
export const UserData = () => {
    type userObject = {
        "id": number,
        "mail": string,
        "age": number,
        "job": string,
        "gender": string,
        "interests": string,
      };

    const [data, setData] = useState<Array<userObject>>([]);
    //const [newData , setNewData] = useState<Array<userObject>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3001/users/'
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    //追加ボタンを押すと表示されるデータが空になる（未修正）
    function editToolBar() {
        const handleClick = async () => {
            const newRow = await axios.post<Array<userObject>>('http://localhost:3001/users/', {
                "id": "",
                "user_id": "",
                "mail": "",
                "age": "",
                "gender": "",
                "job": "",
                "interests": [""]
            });
            setData(newRow.data);
            
            //ここをどうするのか
            const fetchData = async () => {
                const result = await axios(
                    'http://localhost:3001/users/'
                );
    
                setData(result.data);
            };
    
            fetchData();
        };
        //作りかけの削除処理
        /*const deleteUser = React.useCallback(
        (id) => () => {
            setTimeout(() => {
            setData((prevRows) => prevRows.filter((data) => id !== id));
            });
        },
        [],
        );*/
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
                columns={Columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                components={{
                    Toolbar: editToolBar,
                }} />
        </div>
    );
}
