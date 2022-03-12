import React from "react";
import { Typography } from "@mui/material";
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';

type Props = {
    gender : number
};

const GenderCell: React.VFC<Props> = (props) => {
    const { gender } = props;

    let icon: JSX.Element = <></>
    let genderDisplayText : string;
    let color: string = "black"

    switch (gender){
        case 1:
            icon = <BoyIcon />
            genderDisplayText = "男性";
            color = "blue";
            break;
        case 2:
            icon = <GirlIcon />
            genderDisplayText = "女性";
            color = "red";
            break;
        default:
            genderDisplayText = "なし";
            break
    }

    return(
        <>
            {icon}
            <Typography color={color}>{genderDisplayText}</Typography>
        </>
    );
};

export default GenderCell;