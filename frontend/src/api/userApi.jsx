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


export const loginApi = async(email,password) =>{
    const response = await fetch(baseUrl+"/login",{method:"POST",headers:{
        'Content-Type': 'application/json'
    },body: JSON.stringify({email:email,password:password})});
    const data = await response.json();
    return data;
}
export const signupapi = async(formdata) =>{
    const response = await fetch(baseUrl+"/",{method:"POST",headers:{
        'Content-Type': 'application/json'
    },body: JSON.stringify(formdata)});
    const data = await response.json();
    return data;
}