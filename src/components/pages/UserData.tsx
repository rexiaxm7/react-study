import axios from "axios";
import { useState , useEffect } from "react";
import { DataGrid , jaJP } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles'

import Columns from "./Columns";
import { ThemeProvider } from "@emotion/react";


// eslint-disable-next-line import/no-anonymous-default-export
export const UserData = () => {
    const language = createTheme({}, jaJP)

    type userObject = {
        "id": number,
        "mail": string,
        "age": number,
        "job": string,
        "gender": string,
        "interests": string,
      };

    const [data, setData] = useState<Array<userObject>>([]);//初期データ取得のステート
    const [newData , setNewData] = useState<Array<userObject>>([]);//追加データのステート

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3001/users/'
            );

            setData(result.data);
        };

        fetchData();
    }, [newData]);

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
            setNewData(newRow.data);
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
        <ThemeProvider theme={language}>
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
        </ThemeProvider>
    );
}
