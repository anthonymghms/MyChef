const BASE_URL = "http://localhost:3000"

export const getFood = async () => {
    const response = await fetch(`${BASE_URL}/api/exploreFood`)
    const json = await response.json()
    return json;
}