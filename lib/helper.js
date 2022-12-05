const BASE_URL = "http://localhost:3000"

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/api/getUsers`)
    const json = await response.json()

    return json;
}