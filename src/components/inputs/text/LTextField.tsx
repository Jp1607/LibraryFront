import { LTextFieldProps } from "../../../types/componentsTypes/inputTypes"
import { CustomTextField } from "./TextInputComponents"


export const LTextField = ({ value, label, onChange }: LTextFieldProps) => {

    return (
        <CustomTextField
            onChange={onChange}
            value={value}
            label={label}
        />
    )
}