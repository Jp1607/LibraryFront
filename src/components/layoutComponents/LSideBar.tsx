import { LLinkButton } from "../buttons/LLinkButton"
import { LBox } from "./LBox"

export const LSideBar = () => {

    return (
        <LBox display={'flex'} flexDirection={'column'} width={"200px"} bgcolor={"#39ac60"}>
            <LLinkButton label="Livros" path="/books" sx={{ backgroundColor: "#0a8f36", borderBottom: "1px solid black", color: "black" }} />
            <LLinkButton label="Alunos" path="/students" sx={{ backgroundColor: "#0a8f36", borderBottom: "1px solid black", color: "black" }} />
            <LLinkButton label="Emprestados" path="/borrowed" sx={{ backgroundColor: "#0a8f36", borderBottom: "1px solid black", color: "black" }} />
        </LBox>
    )
}