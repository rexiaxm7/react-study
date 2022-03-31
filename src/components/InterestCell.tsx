import React from "react";
import {Box, Chip} from "@mui/material";

type Props = {
    interests: string[]
};

const InterestCell: React.VFC<Props> = (props) => {
    const { interests } = props;

    return (
        <>
            {
                interests.map(
                    (value, index) => (
                        <Box key={index} mr="3px">
                            <Chip label={value} variant="outlined" />
                        </Box>
                    )
                )
            }
        </>
    );
}

export default InterestCell;