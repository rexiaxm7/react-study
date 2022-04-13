import React from "react";
import { Typography } from "@mui/material";
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

type GenderCellProps = {
    gender : number
};

const toGenderDisplayParts = (gender: number): { icon : JSX.Element, displayText: string, color: string } => {
    switch (gender) {
        case 1:
            return {icon: <BoyIcon/>, displayText: '男性', color: 'blue'}
        case 2:
            return {icon: <GirlIcon/>, displayText: '女性', color: 'red'}
        default:
            return {icon: <QuestionMarkIcon/>, displayText: 'なし', color: 'black'}
    }
};

const GenderCell: React.VFC<GenderCellProps> = ({ gender}) => {
    const { icon, color, displayText } = toGenderDisplayParts(gender);

    return(
        <>
            {icon}
            <Typography color={color}>{displayText}</Typography>
        </>
    );
};

export default GenderCell;