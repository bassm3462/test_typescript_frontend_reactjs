import React, { FormEvent, useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { AppDispatch } from "../../Redux//store.tsx"
import { useDispatch } from "react-redux";
import { AddNVRmnulle } from "../../Redux/stateNVR/NVRaction";

function Dashboard() {
  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [Address,setAddress]=useState("");
  const [port,setPort]=useState("");
  const[LiveView,setLiveView]=useState("")
  const [Playback,setPlayback]=useState("Low");
  const[StreamMediaProtocol,setStreamMediaProtocol]=useState("Default");
const dispatch=useDispatch()

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("hello");
    const formData=new FormData()
    formData.append('name', name);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('Address', Address);
    formData.append('port', port);
    formData.append('LiveView', LiveView);
    formData.append('Playback', Playback);
    formData.append('StreamMediaProtocol', StreamMediaProtocol);
    dispatch(AddNVRmnulle(formData))
  };
  return (
    <div className="container mt-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* Name input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="text" id="form4Example1" className="form-control" onChange={(e)=>setName(e.target.value)}/>
          <label className="form-label" htmlFor="form4Example1">
            name devices
          </label>
        </div>
        {/* Email input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="text" id="form4Example2" className="form-control"onChange={(e)=>setAddress(e.target.value)} />
          <label className="form-label" htmlFor="form4Example2">
            Address
          </label>
        </div>
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="text" id="form4Example1" className="form-control" onChange={(e)=>setPort(e.target.value)}/>
          <label className="form-label" htmlFor="form4Example1">
            port
          </label>
        </div>
        {/* Email input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="username" id="form4Example2" className="form-control" onChange={(e)=>setusername(e.target.value)} />
          <label className="form-label" htmlFor="form4Example2">
            username
          </label>
        </div>
        <div data-mdb-input-init="" className="form-outline mb-4">
          <input type="password" id="form4Example2" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
          <label className="form-label" htmlFor="form4Example2">
          password
          </label>
        </div>
        <div data-mdb-input-init="" className="form-outline mb-4">
        <label className="form-label" htmlFor="form4Example2">
          StreamMediaProocol
          </label>
          <select className="form-select" aria-label="Default select example" onChange={(e)=>setStreamMediaProtocol(e.target.value)}>
          <option selected>Open this select menu</option>
            <option value="Default">Default</option>
            <option value="Protocol 2">Protocol 2</option>
            <option value="Protocol 3">Protocol 3</option>
          </select>
          
        </div>
        {/* Email input */}
        <div data-mdb-input-init="" className="form-outline mb-4">
        <label className="form-label" htmlFor="form4Example2">
        Live View
          </label>
          <select className="form-select"  onChange={e=>setLiveView(e.target.value)} aria-label="Default select example">
          <option selected>Open this select menu</option>
            <option value="Auto">Auto</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
          </select>
        </div>
        <div data-mdb-input-init="" className="form-outline mb-4">
        <label className="form-label" htmlFor="form4Example2">
        Play Back
          </label>
          <select className="form-select" aria-label="Default select example" onChange={(e)=>setPlayback(e.target.value)}>
          <option selected>Open this select menu</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>
        {/* Submit button */}
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={(e) => handleSubmit(e)}
        >
          register
        </button>
      </form>
    </div>
  );
}
export default Dashboard;
