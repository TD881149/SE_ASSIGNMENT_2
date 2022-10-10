import React, {useState} from "react";
import { Link,useLocation } from "react-router-dom";
const Home = () => {
    const  data = {
        name: "Thrishitha Dendi",
        description : "My name is Thrishitha Dendi. This is my SE assignment 2"
    }
    const location = useLocation()
    if(location.state){
        if(location.state.data.data.name && location.state.data.data.description)
        {
            data.name = location.state.data.data.name
            data.description = location.state.data.data.description
        }
    }
   
    return (
        <div>
            <table>
                <tr>
                    <td>
                    <img src="https://picsum.photos/id/237/200/300"/>
                    </td>
                    <td>
                    <label  style={{float: "left",fontSize: "40px", fontWeight: "bold"}}>{data.name}</label> <br></br><br></br>
                    <label  style={{float: "left"}}>{data.description}</label>
                    </td>
                </tr>
            </table>
            <Link to="/updateinfo" state={{ data: {data} }} className="btn btn-outline-secondary">Update My  Infomation</Link>
        </div>
    );
};
export default Home