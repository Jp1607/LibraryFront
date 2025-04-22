import { StudentType } from "../../types/entities/student";
import { PUT } from "../requests";

export async function editStudent(student: StudentType): Promise<string> {
    const response = await PUT("students", student).then((response) => response);
    return response;
}