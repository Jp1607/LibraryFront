import { CustomButton } from "./ButtonComponents"

type LButtonProps = {
    label: string,
    onClick: () => void
}

export const LButton: React.FC<LButtonProps> = ({ label, onClick }) => {
    return (
        <CustomButton onClick={() => onClick}>{label}</CustomButton>
    )
}