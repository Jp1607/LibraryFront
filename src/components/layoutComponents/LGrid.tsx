import { CustomGridType } from "../../types/componentsTypes/layoutTypes"
import { CustomGrid } from "./LayoutComponents"

export const LGrid: React.FC<CustomGridType> = ({ children }: CustomGridType) => {

    return (
        <CustomGrid>
            {children}
        </CustomGrid>
    )
}