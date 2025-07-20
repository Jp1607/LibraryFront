import { Link } from "react-router-dom"
import { LLinkButtonProps } from "./buttons.types"
import { LinkButtonComponentStyle } from "./buttons.style"
import { GenericButton } from "./GenericButton"

export const LLinkButton: React.FC<LLinkButtonProps> = ({ path, label, ...rest }: LLinkButtonProps) => {

    return (
        <GenericButton  {...rest} >{label}</GenericButton>
    )
}