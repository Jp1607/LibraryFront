import React, { JSX } from "react";
import { ButtonPropsVariantOverrides, Button as MuiButton } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';


type SizeType = "xs" | "s" | "m" | "l" | "xl";

type ButtonVariants = "primary" | "secondary"

type IconType = "save"

type ButtonKinds = "save"

type ButtonType = {
    kind: ButtonKinds;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



const Button: React.FC<ButtonType> = ({ kind, onClick }) => {

    type ButtonVariantsType = {
        [key in ButtonKinds]: {
            variant: ButtonVariants;
            icon: IconType;
            label: string
        }
    }

    const ButtonVariants: ButtonVariantsType = {
        save: {
            icon: "save",
            label: "Salvar",
            variant: "primary"
        }
    }

    return (
        <PlainButton variant={ButtonVariants[kind].variant} icon={ButtonVariants[kind].icon} iconSize="m" size="m" onClick={onClick}>
            {ButtonVariants[kind].label}
        </PlainButton>)
}

type PlainButtonType = {
    variant: ButtonVariants;
    size: SizeType;
    icon: IconType;
    iconSize: SizeType;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function parseVariant(variant: ButtonVariants) {
    if (variant == "primary") {
        return "contained"
    } else {
        return "text"
    }
}

function getIcon(icon: IconType): JSX.Element {

    return <CheckIcon />

}

export const PlainButton: React.FC<React.PropsWithChildren<PlainButtonType>> = ({ variant, children, icon, onClick }) => {

    return (
        <MuiButton variant={parseVariant(variant)} startIcon={getIcon(icon)} onClick={onClick}>{children}</MuiButton>
    )
}

export default Button;