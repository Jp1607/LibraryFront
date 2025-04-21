import { Link } from "react-router-dom"
import { CustomButton } from "./ButtonComponents"
import { LLinkButtonProps } from "./buttons.types"

export const LLinkButton: React.FC<LLinkButtonProps> = ({ path, label, ...rest }: LLinkButtonProps) => {

    return (
        <CustomButton component={Link} to={path} {...rest}>{label}</CustomButton>
    )
}