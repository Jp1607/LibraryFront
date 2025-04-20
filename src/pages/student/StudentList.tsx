import React from "react";
import { getStudentsList } from "../../api/students/students_GET";
import { LButton } from "../../components/buttons/LButton";
import { LBox } from "../../components/layoutComponents/LBox";
import LTable from "../../components/tables/LTable"
import { StudentType } from "../../types/entities/student";
import { TableHeaders } from "../../types/componentsTypes/tableTypes";
import { LLinkButton } from "../../components/buttons/LLinkButton";

const StudentPage = () => {
    const [studentList, setStudentList] = React.useState<StudentType[]>([]);
    const [selectedStudent, setSelectedStudent] = React.useState<StudentType>(
        {
            id: 0,
            name: "",
            surname: "",
            class: "",
            contact: ""
        });
    const [open, setOpen] = React.useState<Boolean>(false);

    const StudentsTableHeaders: TableHeaders<StudentType>[] = [
        { key: "name", label: "Nome" },
        { key: "surname", label: "Sobrenome" },
        { key: "class", label: "Turma" }
    ]

    React.useEffect(() => {
        getStudentsList().then((response) => { setStudentList(response) });
    }, []);

    const HandleRowClick = (student: StudentType) => {
        setSelectedStudent(student);
    }

    const HandleSave = () => {

    }

    const HandleEdit = () => {

    }

    const HandleDelete = () => {

    }

    // const HandleBorrow = () => {

    // }

    return (
        <LBox>
            <LLinkButton label="Novo" path="/students/new" />
            <LLinkButton label="Editar" path={`/students/new/:${selectedStudent.id}`} />
            <LButton label="Excluir" onClick={() => HandleDelete} />
            {/* <LButton label="Emprestar" onClick={() => HandleBorrow} /> */}
            <LTable<StudentType> rows={studentList} onRowClick={HandleRowClick} columns={StudentsTableHeaders} />
        </LBox>
    )
}

export default StudentPage