import { styled } from "@mui/material"

type GenericButtonStyleType = {
    backgroundColor?: string;
    color?: string;
    border?: string;
    padding?: string;
    font?: string
}

const DefaultGenericButtonStyle: Required<GenericButtonStyleType> = {
    backgroundColor: '#EEE',
    color: '#31b934',
    border: '1px solid #31b934',
    padding: '',
    font: '500 150% "Times new Roman"'
}

const StyledGenericButton = styled('button')<GenericButtonStyleType>((props) => ({
    backgroundColor: props.backgroundColor ?? DefaultGenericButtonStyle.backgroundColor,
    color: props.color ?? DefaultGenericButtonStyle.color,
    border: props.border ?? DefaultGenericButtonStyle.border,
    font: props.font ?? DefaultGenericButtonStyle.font,
    padding: props.padding ?? DefaultGenericButtonStyle.padding
}))

type GenericButtonType = {
    children?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
} & GenericButtonStyleType

export const GenericButton: React.FC<GenericButtonType> = ({ children, onClick, ...styles }) => {
    return (
        <StyledGenericButton
            onClick={onClick}
            {...styles}
        >
            {children}
        </StyledGenericButton>
    )
}