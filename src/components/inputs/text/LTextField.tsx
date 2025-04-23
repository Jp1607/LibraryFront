import { LTextFieldProps } from "../../../types/componentsTypes/inputTypes"
import { CustomTextField } from "./TextInputComponents"


export const LTextField = ({ value, label, readonly, onChange }: LTextFieldProps) => {

    console.log(value)

    return (
        <CustomTextField
            readonly={readonly}
            onChange={onChange}
            value={value}
            label={label}
        />
    )
}