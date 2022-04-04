import { memo, useCallback, useEffect, VFC } from "react";

import { toUserRecords } from "../../types/converts/toUserRecords";
import { useAllUsers } from "./../../hooks/user/useAllUsers";
import { UserGrid } from '../organisms/UserGrid';

export const UserList: VFC = memo((props) => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      <div style={{ height: "80vh", width: '100%' }}>
        <UserGrid users={toUserRecords(users)}></UserGrid>
      </div>
    </main>
  );
});