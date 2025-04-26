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
            id: undefined,
            name: "",
            surname: "",
            classroom: undefined,
            contact: ""
        });
    const [open, setOpen] = React.useState<Boolean>(false);

    const StudentsTableHeaders: TableHeaders<StudentType>[] = [
        { key: 'id', label: "Id" },
        { key: "name", label: "Nome" },
        { key: "surname", label: "Sobrenome" },
        { key: "classroom", label: "Sala" }
    ]

    React.useEffect(() => {
        getStudentsList().then((response) => { setStudentList(response) });
    }, []);

    const HandleRowClick = (student: StudentType) => {
        setSelectedStudent(student);
    }

    // const HandleDelete = () => {

    // }

    return (
        <LBox>
            <LLinkButton label="Novo" path="/students/new" />
            <LLinkButton label="Editar" path={`/students/new/:${selectedStudent.id}`} />
            {/* <LButton label="Excluir" onClick={() => HandleDelete} /> */}
            <LTable<StudentType> rows={studentList} onRowClick={HandleRowClick} columns={StudentsTableHeaders} />
        </LBox>
    )
}

export default StudentPage