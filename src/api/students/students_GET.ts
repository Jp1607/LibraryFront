import { StudentType } from "../../types/entities/student";
import { GET } from "../requests";

export async function getStudentsList(): Promise<StudentType[]> {
    const StudentList: StudentType[] = await GET<StudentType[]>("students").then(
        (response) => response
    );
    return StudentList;
}

export async function getStudentById(id: number): Promise<StudentType> {
    const Student: StudentType = await GET<StudentType>("students", [`id=${id}`]).then(
        (response) => response
    );
    return Student;
}