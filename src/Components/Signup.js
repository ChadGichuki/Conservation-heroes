import React, {useState} from "react";
import UserPool from "../UserPool";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormdata] = useState({})

    const navigate = useNavigate();

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        setFormdata({
            ...formData,
            [name]:value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        UserPool.signUp(formData.email, formData.password, [], null, (err, data) => {
            if (err){
                console.error(err)
            }
            console.log(data)
        })

        fetch("http://35.175.182.106:8000/api/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(()=> {
            
            console.log("User added successfully!")
            navigate('/dashboard')}
            )

        e.target.reset()
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" value={formData.name} onChange={handleChange}/>
                <div id="emailHelp" className="form-text">Username must be unique and will be used as your Hero Alias.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Instagram Username</label>
                <input type="text" className="form-control" id="exampleInputPassword2" name="instagram" value={formData.instagram} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Facebook Username</label>
                <input type="text" className="form-control" id="exampleInputPassword2" name="instagram" value={formData.facebook} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Twitter Handle</label>
                <input type="text" className="form-control" id="exampleInputPassword3" name="twitter" value={formData.twitter} onChange={handleChange}/>
            </div>
            <div className="mb-3 form-check">
                <label className="form-check-label" for="exampleCheck1">Your Instagram, Facebook and Twitter usernames may be publicly visibile on the global leaderboard charts.</label>
            </div>
            <button type="submit" className="btn btn-success">SignUp</button>
        </form>
    )
}

export default Signup