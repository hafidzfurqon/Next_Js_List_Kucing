import axios from "axios"

export const getAllCats = async () => {
   const res = await axios.get('https://free-cat-api.vercel.app/cats')
   return res.data
}
export const getAllCatsById = async (id: string | number | undefined | any) => {
   const res = await axios.get(`https://free-cat-api.vercel.app/cats/${id}`);
   return res.data;
 };