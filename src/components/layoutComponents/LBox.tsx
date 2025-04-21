import { LBoxType } from "../../types/componentsTypes/layoutTypes"
import { CustomBox } from "./LayoutComponents"

export const LBox: React.FC<LBoxType> = ({ children, ...rest }: LBoxType) => {

    return (
        <CustomBox {...rest}>
            {children}
        </CustomBox>
    )
}
