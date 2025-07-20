import { ButtonProps } from "@mui/material"



export type ButtonStyleType = React.ButtonHTMLAttributes<>

export type LLinkButtonProps = ButtonProps & {
    path: string,
    label: string
};