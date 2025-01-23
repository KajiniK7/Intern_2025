import axios from "axios";
import { useState,useEffect } from "react";

const ImgApi = ()=>{
    const [img,setimg] = useState([]);

    useEffect(
        ()=>{
            axios.get("https://fakestoreapi.com/products")
            .then((response)=>{
                setimg(response.data)
            .catch((err)=>{
                comsloe.log('Error while fetching',err);
            })
            })
        },[]
    )

    return(
        <div>
            <div id="grid-container">  
            {
                posts.map((post)=>(
                    <div className="grid-items"><li key={post.id} style={{listStyleType:"none"}}><img src={post.image} alt="images" /></li></div>
                ))
            }
            </div>
        </div>
    )
}