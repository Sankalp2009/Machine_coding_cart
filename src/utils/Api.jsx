export const getApi = async(url)=>{
  try {
    let Response = await fetch(url);
    return Response.json();
  } catch (err) {
    return err
  }
}