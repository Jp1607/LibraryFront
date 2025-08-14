import { styled } from '@mui/material';
import React from 'react';

const Sizes = ['xs', 's', 'm', 'l', 'xl'] as const;
type SizesType = typeof Sizes[number];

const SizeProperties = ['height', 'padding', 'fontSize'] as const;
type SizePropertiesType = typeof SizeProperties[number];

type SizeMapType = {
    [size in SizesType]: { [property in SizePropertiesType]: string }
}
const SizeMap: SizeMapType = {
    xs: {
        padding: '8px',
        height: '28px',
        fontSize: '12px'
    },
    s: {
        padding: '10px',
        height: '34px',
        fontSize: '14px',
    },
    m: {
        padding: '12px',
        height: '40px',
        fontSize: '14px'
    },
    l: {
        padding: '14px',
        height: '46px',
        fontSize: '16px'
    },
    xl: {
        padding: '16px',
        height: '52px',
        fontSize: '18px'
    }
}

function getSize(size: SizesType, property: SizePropertiesType): string {
    return SizeMap[size][property];
}

interface CustomButtonProps extends Omit<MuiButtonProps, 'size' | 'variant' | 'color' | 'disabled'> {
    size?: ButtonSize;
    kind?: ButtonKind;
    isDisabled?: boolean | string;
    isLoading?: boolean;
    isRounded?: boolean;
}

const StyledButton = styled('input')<{
    size: SizesType;
}>(({ theme, size }) => ({
    padding: getSize(size, 'padding')
}));

export function Button({
    children,
    size = 'm',
    kind = 'primary',
    isDisabled = false,
    isLoading = false,
    isRounded = false,
    onClick,
    ...rest
}: CustomButtonProps) {
    const muiSize = sizeMap[size];
    const muiVariant = variantMap[kind];
    const muiColor = colorMap[kind];

    const buttonElement = (
        <StyledButton
            variant={muiVariant}
            size={muiSize}
            color={muiColor}
            disabled={!!isDisabled || isLoading}
            onClick={isDisabled || isLoading ? undefined : onClick}
            isRounded={isRounded}
            buttonSize={size}
            buttonKind={kind}
            startIcon={isLoading ? <CircularProgress size={16} /> : undefined}
            {...rest}
        >
            {children}
        </StyledButton>
    );

    // Handle tooltip for string-based disabled state
    if (typeof isDisabled === 'string') {
        return (
            <Tooltip title={isDisabled} arrow>
                <span> {/* Wrapper needed for disabled button tooltips */}
                    {buttonElement}
                </span>
            </Tooltip>
        );
    }

    return buttonElement;
}



export type CustomTextFieldProps = {
    size: SizesType
    label?: string,
    readonly?: boolean,
    value: any, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const StyledTextField = styled('input')<{ size: SizesType }>(({ theme, size }) => ({
    padding: 0,
    height: getSize(size, "height"),
    paddingY: getSize(size, 'padding'),
    fontSize: getSize(size, 'fontSize')
}))

const CustomTextField = (props: CustomTextFieldProps) => {
    return (
        <StyledTextField />
    )
}

// Usage examples:
export function ButtonExamples() {
    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button kind="primary">Primary</Button>
            <Button kind="secondary" size="s">Secondary Small</Button>
            <Button kind="outlined" isRounded>Outlined Rounded</Button>
            <Button kind="alert" isLoading>Loading Alert</Button>
            <Button isDisabled="You must save first" kind="ghost">
                Disabled with Tooltip
            </Button>
            <Button kind="ghostPrimary" size="xl">
                Ghost Primary XL
            </Button>
        </div>
    );
}