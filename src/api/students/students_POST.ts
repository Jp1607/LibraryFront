import { StudentDTOType } from "../../types/entities/student";
import { POST } from "../requests";

export async function addStudent(student: StudentDTOType): Promise<string> {
    const response = await POST("students", student).then((response) => response);
    return response;
}
