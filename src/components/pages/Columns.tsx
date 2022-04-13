import "./User.css";
import { GridColDef} from "@mui/x-data-grid";



// eslint-disable-next-line import/no-anonymous-default-export
const Columns: GridColDef[] = [
  { field: 'id', 
    headerName: 'ID', 
    width: 90 
  },
  {
    field: 'mail',
    headerName: 'メールアドレス',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: '年齢',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'job',
    headerName: '職業',
    width: 150,
    editable: true,
  },
  {
    field: 'gender',
    headerName: '性別',
    width: 100,
    editable: true,
  },
  {
    field: 'interests',
    headerName: '趣味',
    width: 200,
    editable: true,
    },
    {
      field: 'actions',
      type: 'Actions',
      headerName: '操作',
      width: 110,
    }
];



export default Columns