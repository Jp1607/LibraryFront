import { Button, ButtonProps, styled } from "@mui/material"
import { LinkProps } from "react-router-dom"

type CustomProps = ButtonProps & Partial<LinkProps>
const StyledButton = styled(Button)<CustomProps>(({ }) => ({}))
type CustomButtonProps = ButtonProps & {
    component?: React.ElementType,
    children?: React.ReactNode,
    to?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const CustomButton: React.FC<CustomButtonProps> = ({ children, component, to, onClick, ...rest }) => {
    return (
        <StyledButton component={component} to={to} onClick={onClick} {...rest}>{children}</StyledButton>
    )
}