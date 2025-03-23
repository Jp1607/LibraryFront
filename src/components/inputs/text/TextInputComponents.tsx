import { styled, TextField } from "@mui/material"

const StyledTextField = styled(TextField)({})
type CustomTextFieldProps = {
}
export const CustomTextField: React.FC<CustomTextFieldProps> = () => {
    return (<StyledTextField></StyledTextField>)
}