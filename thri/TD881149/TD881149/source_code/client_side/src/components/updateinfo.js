import React,{useState} from "react";
import { useLocation,useNavigate } from 'react-router-dom'
const UpdateInfo = (props)  => {
    const location = useLocation()
    const [data, setData] = useState(location.state.data.data)
    const navigate = useNavigate();
    const setNameFromUser = (e) => {
        data.name = e.target.value;
    }
    const setDescriptionFromUser = (e) => {
        console.log(e.target.value);
        data.description = e.target.value;
    }
    const routeChange = () => { 
        console.log(data);
        navigate('/',{state:{data:{data}}});
      }
    return (
        <div style={{backgroundColor: "indianred"}}>
  <label>
    Name:
    <input type="text" name="name" defaultValue={data.name}  onChange = {setNameFromUser} />
  </label><br/>
  <label> <br/><br/>
    About User:
    <textarea name="description"  defaultValue={ data.description } onChange={setDescriptionFromUser}/>
  </label><br/><br/>
  <input type="submit" value="Update Information"  onClick={routeChange} className="btn btn-primary" />
  </div>
    );
};
export default UpdateInfo