
import { GenericButton } from "./GenericButton"

export type LLinkButtonProps = {
    path: string,
    label: string
};

export const LLinkButton: React.FC<LLinkButtonProps> = ({ path, label, ...rest }: LLinkButtonProps) => {

    return (
        <a href={path} style={{ width: '100%', height: '100%' }}>
            <GenericButton  {...rest} >{label}</GenericButton>
        </a>
    )
}