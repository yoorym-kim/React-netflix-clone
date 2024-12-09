import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "bb14c2d663352f705851cb20028c432e",
        language: "ko-KR",
    },
});

export default instance;