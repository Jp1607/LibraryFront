import { ApiData, apiDataType } from "../types/entities/api";


const myHeaders: Headers = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function GET<T>(tableName: string, param?: string[]): Promise<ApiData<T>> {
  const query = param ? `?${param.map((p) => `${p}`).join("&")}` : "";
  const response = await fetch(`http://localhost:8080/${tableName}${query}`, {
    headers: myHeaders,
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.json();
  }
}

export async function POST<T>(tableName: string, obj?: T, param?: string[]): Promise<string> {
  console.log(param)
  const query = param ? `?${param.map((p) => `${p}`).join("&")}` : "";
  const response = await fetch(`http://localhost:8080/${tableName}${query}`, {
    headers: myHeaders,
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.text();
  }
}

export async function PUT<T>(tableName: string, obj: T): Promise<string> {
  const response = await fetch(`http://localhost:8080/${tableName}/edit`, {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(obj),
  });
  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.text();
  }
}

export async function PUTExclude(
  tableName: string,
  obj: apiDataType
): Promise<string> {
  const response = await fetch(
    `http://localhost:8080/${tableName}/exclude?id=${obj.id}`,
    {
      method: "PUT",
      body: JSON.stringify(obj),
    }
  );
  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.text();
  }
}
