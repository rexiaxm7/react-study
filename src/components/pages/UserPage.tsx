import React from "react";
import UserListTable from "../UserListTable";
import Header from "../Header";

const UserPage: React.VFC = () => {
    return (
        <>
            <Header />
            <UserListTable />
        </>
    )
};

export default UserPage;
