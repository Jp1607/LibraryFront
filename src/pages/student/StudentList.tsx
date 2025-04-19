import React from "react";
import { getStudentsList } from "../../api/students/students_GET";
import { LButton } from "../../components/buttons/LButton";
import { LBox } from "../../components/layoutComponents/LBox";
import LTable from "../../components/tables/LTable"
import { StudentType } from "../../types/entities/student";

const StudentPage = () => {
    const [studentList, setStudentList] = React.useState<StudentType[]>([]);
    const [selectedStudent, setSelectedStudent] = React.useState<StudentType>({});
    const [open, setOpen] = React.useState<Boolean>(false);

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
    const HandleBorrow = () => {

    }

    return (
        <LBox>

            <LButton label="Novo" onClick={ } />
            <LButton label="Editar" onClick={ } />
            <LButton label="Excluir" onClick={ } />
            <LButton label="Emprestar" onClick={ } />
            <LTable<StudentType> rows={studentList} onRowClick={HandleRowClick} columns={StudentTableHeaders} />
        </LBox>
    )
}

export default StudentPage