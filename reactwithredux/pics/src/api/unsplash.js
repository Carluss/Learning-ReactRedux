import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GxGoeWIZx8m723VgsFWRy_94uUIhTT3eoLUm8oxxIqo",
  },
});
