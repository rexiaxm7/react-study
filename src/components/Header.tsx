import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

const Header: React.VFC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ユーザー一覧
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;