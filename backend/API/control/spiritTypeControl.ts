import axios from 'axios';


export async function getSpiritType(req:any, res:any){
    try {

      const spiritTypeApiUrl = process.env.SPIRIT_TYPE_API_URL;
      const response = await axios.get(spiritTypeApiUrl);
      const responseData = response.data;
      if(!responseData){
        throw new Error("Server Error status code: 500")
      }
        res.status(200).send(responseData);
      } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  };

