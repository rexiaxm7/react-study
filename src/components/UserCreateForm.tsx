import React, {useState} from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {
    Alert,
    Box,
    Button,
    Checkbox,
    Container,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {jobList} from "../constants/jobList";
import {interestsList} from "../constants/interestsList";

const UserCreateForm: React.VFC = () => {
    const navigate = useNavigate();

    const [success, setSuccess]     = useState<boolean>(true);
    const [userId, setUserId]       = useState<string>("");
    const [mail, setMail]           = useState<string>("");
    const [age, setAge]             = useState<number>();
    const [gender, setGender]       = useState<number>();
    const [job, setJob]             = useState<string>("");
    const [interests, setInterests] = useState<string[]>([]);

    const changeUserId    = (e: React.ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const changeMail      = (e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value);
    const changeAge       = (e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value));
    const changeGender    = (e: React.ChangeEvent<HTMLInputElement>) => setGender(Number(e.target.value));
    const changeJob       = (e: any) => setJob(e.target.value);
    const changeInterests = (e: any) => {
        if(e.target.checked){
            if (interests?.includes(e.target.value) === false){
                setInterests([...interests, e.target.value]);
            }
        }else{
            setInterests(interests.filter(x => x !== e.target.value));
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:3001/users",{
                user_id: userId,
                mail, age, gender, job, interests
            });

            // 一覧画面へ遷移
            navigate("/users");

        }catch (ex){
            // 登録失敗
            setSuccess(false);
        }
    };

    return (
        <Container fixed>
            <Box  sx={{m: 2}}>
            {
                success ? <></> : <Alert severity="error">登録に失敗しました。</Alert>
            }
            </Box>
            <Typography variant="h5" component="div" sx={{m: 2}}>
                新規ユーザ登録
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{m: 2}}>
                    <TextField label="ユーザーID" variant="outlined" value={userId} onChange={changeUserId} fullWidth/>
                </Box>
                <Box sx={{m: 2}}>
                    <TextField label="メールアドレス" variant="outlined" value={mail} onChange={changeMail} fullWidth/>
                </Box>
                <Box sx={{m: 2}}>
                    <TextField type={"number"} label="年齢" variant="outlined" value={age} onChange={changeAge} />
                </Box>
                <Box sx={{m: 2}}>
                    <FormControl fullWidth>
                        <FormLabel id="gender-row-radio-buttons-group-label">性別</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="gender-row-radio-buttons-group-label"
                            name="gender"
                            value={gender}
                            onChange={changeGender}
                        >
                            <FormControlLabel value="1" control={<Radio />} label="男性"/>
                            <FormControlLabel value="2" control={<Radio />} label="女性" />
                            <FormControlLabel value="0" control={<Radio />} label="なし" />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box sx={{m: 2}}>
                    <FormControl fullWidth>
                        <InputLabel id="job-select-label">職業</InputLabel>
                        <Select
                            labelId="job-select-label"
                            id="job-select"
                            value={job}
                            label="職業"
                            onChange={changeJob}
                        >
                        {
                            jobList.map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)
                        }
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{m: 2}}>
                    <FormControl>
                    <FormLabel>趣味</FormLabel>
                    <FormGroup row>
                    {
                        interestsList.map((value) =>
                            <FormControlLabel key={value} control={<Checkbox checked={interests.includes(value)} value={value}/>} label={value} onChange={changeInterests} />)
                    }
                    </FormGroup>
                    </FormControl>
                </Box>
                <Box sx={{m: 2}}>
                    <Button onClick={handleSubmit} variant="contained" style={{ minWidth: "120px" }}>登録</Button>
                </Box>
            </form>
        </Container>
    )
};

export default UserCreateForm;