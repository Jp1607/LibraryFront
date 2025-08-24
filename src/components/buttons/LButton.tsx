import { styled } from "@mui/material"
import { PlainButton } from "./Button"

type LButtonProps = LButtonStyleType & {
  label: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type LButtonStyleType = {};

const DefaultLButtonStyle: Required<LButtonStyleType> = {};

const StyledLButton = styled(PlainButton) <LButtonStyleType>``;

export const LButton: React.FC<LButtonProps> = ({ label, onClick, ...styles }: LButtonProps) => {

  const props = { onClick: onClick }

  return (<></>)
}

export default StyledLButton;