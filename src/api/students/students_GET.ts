import { ApiData } from "../../types/entities/api";
import { StudentType } from "../../types/entities/student";
import { GET } from "../requests";

export async function getStudentsList(page?: number): Promise<ApiData<StudentType>> {
    const StudentList: ApiData<StudentType> = await GET<StudentType>("students", [`page=${page}`]).then(
        (response) => response
    );
    return StudentList;
}

export async function getStudentById(id: number): Promise<ApiData<StudentType>> {
    const Student: ApiData<StudentType> = await GET<StudentType>("students", [`id=${id}`]).then(
        (response) => response
    );
    return Student;
}