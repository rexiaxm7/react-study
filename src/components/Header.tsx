import React from "react";
import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header: React.VFC = () => {
    const navigate = useNavigate();

    const moveUserPage = () => navigate("/users");

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{cursor: "pointer"}} onClick={moveUserPage} sx={{ flexGrow: 1 }}>
                    ユーザー管理
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;