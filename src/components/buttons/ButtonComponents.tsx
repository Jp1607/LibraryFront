import { Button, styled } from "@mui/material"

const StyledButton = styled(Button)(({ theme }) => ({}))
type CustomButtonProps = {
    component?: React.ElementType,
    children?: React.ReactNode,
    onClick: () => {}
}
export const CustomButton: React.FC<CustomButtonProps> = ({ children, component, onClick }) => {
    return (
        <>
            <StyledButton component={component} onClick={onClick}>{children}</StyledButton>
            <Button component={'a'}></Button>
        </>

    )
}