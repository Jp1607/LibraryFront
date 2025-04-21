import { LLinkButton } from "../buttons/LLinkButton"
import { LBox } from "./LBox"
import { LGrid } from "./LGrid"

export const LSideBar = () => {

    return (
        <LBox display={'flex'} flexDirection={'column'} width={"10%"} bgcolor={"#39ac60"}>
            <LLinkButton label="Livros" path="/books" sx={{ backgroundColor: "#0a8f36" }} />
            <LLinkButton label="Alunos" path="/students" sx={{ backgroundColor: "#0a8f36" }} />
        </LBox>
    )
}