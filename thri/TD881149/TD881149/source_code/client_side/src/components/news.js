import React from "react";
function News(){
    const [title, setTitle] = React.useState(null);
    const [user, setUser] = React.useState(null);
    
    React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(results => results.json())
        .then(data => {
         setTitle(data.title)
         setUser(data.id)
        });
    }, []);
  
    return (
      <div style={{float: "left"}}>
       User Id: {!user ? 'Loading...' : `${user}`} <br/>
       Title: {!title ? 'Loading...' : `${title}`} <br/>
      </div>
    );
  }
export default News