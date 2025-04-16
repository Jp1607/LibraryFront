import { StudentType } from "../../types/entities/student";
import { GET } from "../requests";

export async function getStudentsList(): Promise<StudentType[]> {
    const StudentList: StudentType[] = await GET<StudentType[]>("books").then(
        (response) => response
    );
    return StudentList;
}