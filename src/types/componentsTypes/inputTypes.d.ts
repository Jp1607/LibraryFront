export type LTextFieldProps = { label?: string, value: any, readonly: boolean, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void };
export type CustomTextFieldProps = { children?: React.ReactNode, label?: string, readonly?: bo0lean, value: any, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void };