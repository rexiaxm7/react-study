import React from "react";
import UserListTable from "../UserListTable";
import Header from "../Header";
import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";

const UserPage: React.VFC = () => {
    return (
        <>
            <Header />
            <Box sx={{ m: 1 }}>
                <Button variant="outlined" component={Link} to="/users/create">ユーザ登録</Button>
            </Box>
            <UserListTable />
        </>
    )
};

export default UserPage;
