import React, { JSX } from "react";
import { ButtonPropsVariantOverrides, Button as MuiButton } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';


type SizeType = "xs" | "s" | "m" | "l" | "xl";

type ButtonVariants = "primary" | "secondary"

type IconType = "save"
type ButtonType = {
    variant: ButtonVariants;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonType> = ({ variant, onClick }) => {
    return (<PlainButton variant="primary" icon="save" iconSize="m" size="m" onClick={onClick}>Main</PlainButton>)
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

const PlainButton: React.FC<React.PropsWithChildren<PlainButtonType>> = ({ variant, children, icon, onClick }) => {

    return (
        <MuiButton variant={parseVariant(variant)} startIcon={getIcon(icon)} onClick={onClick}>{children}</MuiButton>
    )
}