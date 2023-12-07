import React, { useState } from "react";
import "./Create.css";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement,reset } from "../features/UserDetails";
import { allposts} from '../features/UserDetails';
function Create() {
  const [complete, setComplete] = useState("");

  
  // const dispatch = useDispatch();

  // const count = useSelector((state) => state.show.count);
  // console.log(count);

  const post=useSelector(allposts)
  console.log(post)
  const getting = (e) => {
    setComplete({ ...complete, [e.target.name]: e.target.value });
    console.log(complete);
  };

  return (
    <div className="application">
      {/* <p className="count">{count}</p> */}
      <input
        type="text"
        className="text-box"
        name="name"
        onChange={getting}
        placeholder="Name"
      />
      <br />



      <input
        type="text"
        className="text-box"
        name="email"
        onChange={getting}
        placeholder="email"
      />
      <br />

      
      {
        post.map((item)=>{
          return(
            <div className="map_data">
            <p>{item.id}</p>
            <p>{item.title}</p>
            </div>
          )
        })
      }

      {/* <button className="button-1" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="button-2" onClick={() => dispatch(decrement())}>
        -
      </button>

      <button className="button-1" onClick={()=>dispatch(reset())}>reset</button> */}
    </div>
  );
}

export default Create;
