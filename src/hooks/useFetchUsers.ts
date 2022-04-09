import {useEffect, useState} from "react";
import User  from "../types/User";
import axios from "axios";

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const fetchUsers = async () => {
        try {
            const res = await axios.get<User[]>("http://localhost:3001/users");
            setUsers(res.data);
        }catch (ex) {

        }
    }


    return { users, fetchUsers }
};

export default useFetchUsers;