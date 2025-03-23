import { Button, styled } from "@mui/material"

const StyledButton = styled(Button)({})
type CustomButtonProps = {
    children?: React.ReactNode,
    onClick: () => {}
}
export const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
    return (<StyledButton onClick={onClick}>{children}</StyledButton>)
}