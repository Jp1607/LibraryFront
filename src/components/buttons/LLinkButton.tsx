
import { PlainButton } from "./Button"

export type LLinkButtonProps = {
    path: string,
    label: string
};

export const LLinkButton: React.FC<LLinkButtonProps> = ({ path, label, ...rest }: LLinkButtonProps) => {

    return (
        <a href={path} style={{ width: '100%', height: '100%' }}>
            {/* <PlainButton  {...rest} >{label}</PlainButton> */}
        </a>
    )
}