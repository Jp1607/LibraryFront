import { Box, styled } from "@mui/material";
import { CustomBoxType } from "../../types/componentsTypes/layoutTypes";

const StyledBox = styled(Box)({});

export const CustomBox: React.FC<CustomBoxType> = ({ children }: CustomBoxType) => {
    return (
        <StyledBox>{children}</StyledBox>
    )
}