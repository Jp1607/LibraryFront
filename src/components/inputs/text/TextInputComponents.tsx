import { styled, TextField } from "@mui/material"
import { CustomTextFieldProps } from "../../../types/componentsTypes/inputTypes"

const StyledTextField = styled(TextField)({})

export const CustomTextField: React.FC<CustomTextFieldProps> = ({ value, children, label, readonly, onChange }: CustomTextFieldProps) => {
    return (<StyledTextField
        disabled={readonly}
        label={label}
        value={value}
        onChange={onChange}
    >
        {children}
    </StyledTextField>)
}