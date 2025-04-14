import React from "react";
import { LTextField } from "../../components/inputs/text/LTextField"
import { LBox } from "../../components/layoutComponents/LBox"
import { StudentType } from "../../types/entities/student";

export const StudentRegister = () => {

    const [currentStudent, setCurrentStudent] = React.useState<StudentType>({ name: "", surname: "", class: "", contact: "" });

    const handleAttributeChange = (key: keyof StudentType, value: any) => {
        const student = Object.assign({}, currentStudent);
        student[key] = value;
        setCurrentStudent(student);
        console.log(student)
    }

    return (
        <LBox>
            <LTextField label="Nome" value={currentStudent.name} onChange={(e) => handleAttributeChange("name", e.target.value.toString())} />
            <LTextField label="Sobrenome" value={currentStudent.surname} onChange={(e) => handleAttributeChange("surname", e.target.value.toString())} />
            <LTextField label="Turma" value={currentStudent.class} onChange={(e) => handleAttributeChange("class", e.target.value.toString())} />
            <LTextField label="Contato" value={currentStudent.contact} onChange={(e) => handleAttributeChange("contact", e.target.value.toString())} />
        </LBox>
    )
}