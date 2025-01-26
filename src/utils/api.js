import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    'x-rapidapi-key': 'e6a620c577msh2184218a20be38ap1af1b8jsn5656078368db',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com',
  },
});

export default api;
