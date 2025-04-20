import { LLinkButton } from "../buttons/LLinkButton"
import { LBox } from "./LBox"

export const LSideBar = () => {

    return (
        <LBox>
            <LLinkButton label="Livros" path="/books" />
            <LLinkButton label="Alunos" path="/students" />
        </LBox>
    )
}