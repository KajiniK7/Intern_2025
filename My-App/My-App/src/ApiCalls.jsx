import axios from 'axios'
import { useState,useEffect } from 'react'

const ApiCalls = ()=>{
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }, []);

        return (
            <div>
                <h1>API Data</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    };

    export default ApiCalls