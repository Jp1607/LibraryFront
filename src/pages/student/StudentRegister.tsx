import React from "react";
import { LTextField } from "../../components/inputs/text/LTextField"
import { LBox } from "../../components/layoutComponents/LBox"
import { StudentDTOType, StudentType } from "../../types/entities/student";
import { LButton } from "../../components/buttons/LButton";
import { addStudent } from "../../api/students/students_POST";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../api/students/students_GET";
import { editStudent } from "../../api/students/students_PUT";

export const StudentRegister = () => {

    const { studentID } = useParams();
    const [currentStudent, setCurrentStudent] = React.useState<StudentDTOType>({ name: "", surname: "", class: "", contact: "" });

    React.useEffect(() => {
        if (studentID) {
            getStudentById(parseInt(studentID))
        }
    }, [])


    const handleAttributeChange = (key: keyof StudentDTOType, value: any) => {
        const student = Object.assign({}, currentStudent);
        student[key] = value;
        setCurrentStudent(student);
    }

    const handleSubmit = async () => {
        if (studentID) {
            await editStudent(currentStudent).then((response) => response).catch((e) => e);
        }
        await addStudent(currentStudent).then((response) => response).catch((e) => e);
    }

    return (
        <LBox>
            <LTextField label="Nome" value={currentStudent.name} onChange={(e) => handleAttributeChange("name", e.target.value.toString())} />
            <LTextField label="Sobrenome" value={currentStudent.surname} onChange={(e) => handleAttributeChange("surname", e.target.value.toString())} />
            <LTextField label="Turma" value={currentStudent.class} onChange={(e) => handleAttributeChange("class", e.target.value.toString())} />
            <LTextField label="Contato" value={currentStudent.contact} onChange={(e) => handleAttributeChange("contact", e.target.value.toString())} />
            <LButton label="Salvar" onClick={() => handleSubmit()} />
        </LBox>
    )
}
