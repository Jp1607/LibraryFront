import { LBoxType } from "../../types/componentsTypes/layoutTypes"
import { CustomBox } from "./LayoutComponents"

export const LBox: React.FC<LBoxType> = ({ children }: LBoxType) => {

    return (
        <CustomBox>
            {children}
        </CustomBox>
    )
}
