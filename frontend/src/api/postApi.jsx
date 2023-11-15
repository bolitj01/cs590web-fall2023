const baseUrl = 'http://localhost:3000/post';


export const getAllPosts = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
};

export const addpost = async(formdata) =>{
    const response = await fetch(baseUrl+"/",{method:"POST",headers:{
        'Content-Type': 'application/json'
    },body: JSON.stringify(formdata)});
    const data = await response.json();
    return data;
}

export const getpost = async(id) =>{
    const response = await fetch(baseUrl+"/"+id);
    const data = await response.json();
    return data;   
}