import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'

const App = () => {
  const [formData,setFormData]=  useState({})
  const [number,setNumber] =  useState(0)
  const [skills, setSkills] = useState([]);

  const addSkill = (type) =>{
    if(type==="+1"){
      setNumber(number + 1)
      setSkills(skills => [...skills,  
                          <div className="form-group w-85" key={number + 1}>
                            <label for="skill">Skill {number + 1}</label>
                            <input type="text" className="form-control w-75" name={`skill_${number + 1}`}  placeholder={`Enter Skill ${number + 1}`} onChange={handleChange}/>
                        </div>
     ]);
    }else{
      if(number > 0){
       setSkills(state => state.filter((skills, index) => index !== state.length - 1))
      }
    }
  }

  const handleChange = (e)=>{
    const {name,value} = e.target
     setFormData({...formData , [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('handleSubmit',formData)
  }


  return (
    <Card style={{ width: '75rem' ,margin:'10px',padding:'10px' }}>
   <form>
  <div className="form-group w-85">
    <label for="title">Title</label>
    <input type="text" className="form-control w-75" name="title" placeholder="Enter Title" onChange={handleChange}/>
    </div>
  <div className="form-group w-85">
    <label for="skill">Skill</label>
    <input type="text" className="form-control w-75" name="skill"  placeholder="Enter Skill" onChange={handleChange}/>
    <button type="button" className="btn btn-danger" style={{float:"right" ,marginRight:'10px'}} onClick={(e)=>addSkill("-1")}>-</button>
    <button type="button" className="btn btn-success" style={{float:"right",marginRight:'10px'}} onClick={(e)=>addSkill("+1")}>+</button>
  </div>

  {skills.map((item, i) => (
    <div key={i}>{item}</div>
  ))}


  <div className="form-group w-85">
    <label for="description">Description</label>
     <textarea className="form-control w-75" name="description" rows="3" onChange={handleChange}></textarea>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </Card>
  );
}
export default App