const baseUrl = 'http://localhost:3000/topic';
export const getAlltopics = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
};