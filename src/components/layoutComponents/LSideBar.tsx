import { LLinkButton } from "../buttons/LLinkButton"
import { LBox } from "./LBox"

export const LSideBar = () => {

    return (
        <LBox display={'flex'} flexDirection={'column'} width={"10%"} bgcolor={"#39ac60"}>
            <LLinkButton label="Livros" path="/books" />
            <LLinkButton label="Alunos" path="/students" />
            <LLinkButton label="Emprestados" path="/borrowed" />
        </LBox>
    )
}