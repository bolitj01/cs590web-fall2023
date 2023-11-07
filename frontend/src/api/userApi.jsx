const baseUrl = 'http://localhost:3000/users';

export const getAllUsers = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
};

export const getuserById = async(id) =>{
    const response = await fetch(baseUrl+"/"+id);
    const data = await response.json();
    return data;
}