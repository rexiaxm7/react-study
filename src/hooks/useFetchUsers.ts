import {useEffect, useState} from "react";
import User  from "../types/User";
import axios from "axios";

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get<User[]>('http://localhost:3001/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch(ex => {
                console.log(ex);
            });
    }, []);

    return { users }
};

export default useFetchUsers;