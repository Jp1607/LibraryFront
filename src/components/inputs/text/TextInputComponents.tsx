import { styled, TextField } from "@mui/material"
import { CustomTextFieldProps } from "../../../types/componentsTypes/inputTypes"

const StyledTextField = styled('input')({
    padding: 0,
    height: 'calc(inherit - 10px)'
})

export const CustomTextField: React.FC<CustomTextFieldProps> = ({ value, children, label, readonly, onChange }: CustomTextFieldProps) => {
    return (<StyledTextField
        disabled={readonly}
        placeholder={label}
        value={value}
        onChange={onChange}
    >
        {children}
    </StyledTextField>)
}