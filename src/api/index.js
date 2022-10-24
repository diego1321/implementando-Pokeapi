export default async function apiCall({
    url,
    metodo = "get",
    body,
    headers,
}) {
    try{
   const response =  await fetch(url, {
    metodo,
    body,
    headers,
  });

  return response.json();
} catch(error){
    Promise.reject(error);  
}
}