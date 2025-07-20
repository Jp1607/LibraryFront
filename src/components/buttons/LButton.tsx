import { styled } from "@mui/material"
import { GenericButton } from "./GenericButton"

type LButtonProps = {
  label: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
} & LButtonStyleType

type LButtonStyleType = {};

const DefaultLButtonStyle: Required<LButtonStyleType> = {};

const StyledLButton = styled(GenericButton) <LButtonStyleType>``;

export const LButton: React.FC<LButtonProps> = ({ label, onClick, ...styles }: LButtonProps) => {
  return <StyledLButton onClick={onClick} {...styles}>{label}</StyledLButton>
}

export default StyledLButton;