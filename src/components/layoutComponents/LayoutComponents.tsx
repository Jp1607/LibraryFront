import { Box, Grid2, styled } from "@mui/material";
import { CustomBoxType, CustomGridType } from "../../types/componentsTypes/layoutTypes";

const StyledBox = styled(Box)({});
export const CustomBox: React.FC<CustomBoxType> = ({ children, ...rest }: CustomBoxType) => {
    return (
        <StyledBox {...rest}>{children}</StyledBox>
    )
}

const StyledGrid = styled(Grid2)({});
export const CustomGrid: React.FC<CustomGridType> = ({ children }: CustomGridType) => {
    return (
        <StyledGrid>{children}</StyledGrid>
    )
}