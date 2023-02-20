const { default: axios } = require("axios");
const { useState } = require("react");

function usePost() {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    const post = async (url, apiData) => {
        try {
            setLoad(true);
            const { data: responseData } = await axios.post(url, apiData);
            setData(responseData);
            setLoad(false);
        } catch (error) {
            setError(true);
            setLoad(false);
        }
    }
    return { data, load, error, post };
}
export default usePost;