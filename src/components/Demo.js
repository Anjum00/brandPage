import { useState, useEffect } from "react";
import axios from "axios";

function Demo() {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((Response) => {
                setData(Response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
}

export default Demo

