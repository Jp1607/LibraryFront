import React, { JSX } from "react";
import { Button as MuiButton, styled } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import UndoIcon from '@mui/icons-material/Undo';
import { Colors, White } from "../../styles/colors";


type SizeType = "xs" | "s" | "m" | "l" | "xl";

type SizePropsType = "padding" | "fontSize" | "height"

type ButtonVariantsType = "primary" | "secondary"

type ButtonVariantsPropsType = "backgroundColor" | "color"

type IconType = "save" | "new" | "return"

type ButtonKinds = "save" | "add" | "return"

type ButtonType = {
    kind: ButtonKinds;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonSizePropsType = {
    [key in SizeType]: {
        [key in SizePropsType]: string
    }
}

const ButtonSizeProps: ButtonSizePropsType = {
    xs: {
        fontSize: "10px",
        height: "32px",
        padding: "4px"
    },
    s: {
        fontSize: "12px",
        height: "36px",
        padding: "6px"
    },
    m: {
        fontSize: "14px",
        height: "40px",
        padding: "8px"
    },
    l: {
        fontSize: "16px",
        height: "44px",
        padding: "10px"
    },
    xl: {
        fontSize: "18px",
        height: "48px",
        padding: "12px"
    }
}

type ButtonVariantPropsTreeType = {
    [key in ButtonVariantsType]: {
        [key in ButtonVariantsPropsType]: string
    } & {
        hover: {
            [key in ButtonVariantsPropsType]: string
        }
    }
}

const ButtonVariantPropsTree: ButtonVariantPropsTreeType = {
    primary: {
        backgroundColor: Colors.Green.MainGreen.MainGreen70,
        color: White,
        hover: {
            backgroundColor: Colors.Green.MainGreen.MainGreen100,
            color: White,
        }
    },
    secondary: {
        backgroundColor: Colors.Grey.MainGrey.MainGrey70,
        color: White,
        hover: {
            backgroundColor: Colors.Grey.MainGrey.MainGrey100,
            color: White,
        }
    }
}

function getPropBySize(size: SizeType, property: SizePropsType) {
    return ButtonSizeProps[size][property];
}

function getPropByVariant(variant: ButtonVariantsType, property: ButtonVariantsPropsType, hover?: boolean) {
    return hover
        ? ButtonVariantPropsTree[variant].hover[property]
        : ButtonVariantPropsTree[variant][property]
}

const Button: React.FC<ButtonType> = ({ kind, onClick }) => {

    type ButtonsVariantsType = {
        [key in ButtonKinds]: {
            variant: ButtonVariantsType;
            icon: IconType;
            label: string
        }
    }

    const ButtonVariants: ButtonsVariantsType = {
        save: {
            icon: "save",
            label: "Salvar",
            variant: "primary"
        },
        add: {
            icon: "new",
            label: "Novo",
            variant: "primary"
        },
        return: {
            icon: "return",
            label: "Voltar",
            variant: "secondary"
        }
    }

    return (
        <PlainButton variant={ButtonVariants[kind].variant} icon={ButtonVariants[kind].icon} iconSize="m" size="m" onClick={onClick}>
            {ButtonVariants[kind].label}
        </PlainButton>)
}

type PlainButtonType = {
    variant: ButtonVariantsType;
    size: SizeType;
    icon: IconType;
    iconSize: SizeType;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function parseVariant(variant: ButtonVariantsType) {
    if (variant == "primary" || variant == "secondary") {
        return "contained"
    } else {
        return "text"
    }
}

function getIcon(icon: IconType): JSX.Element {

    switch (icon) {
        case "save":
            return <CheckIcon />;
        case "new":
            return <AddIcon />
        case "return":
            return <UndoIcon />
    }
}

export const PlainButton: React.FC<React.PropsWithChildren<PlainButtonType>> = ({ variant, children, icon, onClick, size }) => {

    const StyledMuiButton = styled(MuiButton)({
        fontWeight: 600,
        fontSize: getPropBySize(size, "fontSize"),
        height: getPropBySize(size, "height"),
        padding: getPropBySize(size, "padding"),
        backgroundColor: getPropByVariant(variant, "backgroundColor"),
        color: getPropByVariant(variant, "color"),
        ':hover': {
            backgroundColor: getPropByVariant(variant, "backgroundColor", true),
        },
        '.MuiButton-icon': {
            margin: '0px',
            '> svg': {
                marginRight: '8px'
            }
        }
    })

    return (
        <StyledMuiButton variant={parseVariant(variant)} startIcon={getIcon(icon)} onClick={onClick}>{children}</StyledMuiButton>
    )
}

export default Button;