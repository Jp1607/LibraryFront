const OpacityArray = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100] as const;

type OpacityLevel = typeof OpacityArray[number];

function createColorVariants<T extends string>(colorName: T, baseColor: string) {
    const variants = {} as Record<`${T}${OpacityLevel}`, string>;

    OpacityArray.forEach(opacity => {
        const variantKey = `${colorName}${opacity}` as `${T}${OpacityLevel}`;

        if (opacity === 100) {
            variants[variantKey] = baseColor;
        } else {
            const alphaHex = Math.round((opacity / 100) * 255).toString(16).padStart(2, '0').toUpperCase();
            variants[variantKey] = `${baseColor}${alphaHex}`;
        }
    });

    return variants;
}

const BaseColors = {
    MainGreen: "#009A44",
    White: "#FFF",
    MainGrey: "#888B8D"
} as const;

type BaseColorKey = keyof typeof BaseColors;

type ColorVariants<T extends string> = Record<`${T}${OpacityLevel}`, string>;

type ColorCategory<T extends BaseColorKey> = {
    [K in T]: ColorVariants<K>
};

type Group<T extends Record<string, BaseColorKey[]>> = {
    [Category in keyof T]: ColorCategory<T[Category][number]>
};

type ColorStructure = {
    Green: ["MainGreen"],
    White: ["White"],
    Grey: ["MainGrey"],
};

type ColorsType = Group<ColorStructure>;

export type ColorType = {
    [GroupKey in keyof ColorStructure]: {
        [ColorKey in ColorStructure[GroupKey][number]]: `${ColorKey}${OpacityLevel}`
    }[ColorStructure[GroupKey][number]]
}[keyof ColorStructure];

export const White = createColorVariants("White", BaseColors.White).White100;

export const Colors: ColorsType = {
    Green: {
        MainGreen: createColorVariants("MainGreen", BaseColors.MainGreen)
    },
    White: {
        White: createColorVariants("White", BaseColors.White),
    },
    Grey: {
        MainGrey: createColorVariants("MainGrey", BaseColors.MainGrey)
    }
} as const;