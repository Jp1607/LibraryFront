import { ButtonProps } from "@mui/material"
import { ButtonComponentStyle } from "./buttons.style"
import { CustomButton } from "./ButtonComponents"

type LButtonProps = ButtonProps & {
    label: string,
    onClick: () => void
}

export const LButton: React.FC<LButtonProps> = ({ label, onClick, ...rest }: LButtonProps) => {
    return (
        <CustomButton onClick={onClick} {...rest} sx={ButtonComponentStyle}>{label}</CustomButton>
    )
}
