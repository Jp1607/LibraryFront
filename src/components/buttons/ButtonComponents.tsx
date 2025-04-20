import { Button, ButtonProps, styled } from "@mui/material"
import { LinkProps } from "react-router-dom"

type CustomProps = ButtonProps & Partial<LinkProps>
const StyledButton = styled(Button)<CustomProps>(({ }) => ({}))
type CustomButtonProps = {
    component?: React.ElementType,
    children?: React.ReactNode,
    to?: string,
    onClick?: () => {}
}
export const CustomButton: React.FC<CustomButtonProps> = ({ children, component, to, onClick }) => {
    return (
        <>
            <StyledButton component={component} to={to} onClick={onClick}>{children}</StyledButton>
        </>

    )
}