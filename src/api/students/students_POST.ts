import { StudentType } from "../../types/entities/student";
import { POST } from "../requests";

export async function addStudent(student: StudentType): Promise<string> {
    const response = await POST("students", student).then((response) => response);
    return response;
}
