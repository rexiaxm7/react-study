import { memo, useCallback, useEffect, VFC } from "react";
import { DataGrid, GridColumns, GridValueSetterParams, GridValueFormatterParams, GridColDef, GridActionsColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { UserRecord } from './../../types/view/UserRecord';
import { userInfo } from 'os';

import { useAllUsers } from "./../../hooks/user/useAllUsers";
import { UserGrid } from '../organisms/UserGrid';
import { toUserRecords } from "../../types/converts/toUserRecords";

export const UserList: VFC = memo((props) => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <UserGrid users={toUserRecords(users)}></UserGrid>
    </>
  );
});