import React, { useEffect, useState } from "react";
import UserForm from '../components/UserForm';
import { useNavigate } from "react-router-dom";

  
  const userObj = {
    id: 1,
    first_name: "Kezi",
    last_name: "Rose",
    pronouns: "She/Her",
    email: "email@email.com",
    city: "",
    style_one: "",
  };

function Preferences(props) {

    // let [user, setUser] = useState(userObj);
    const [formData, setFormData] = useState(userObj);
    const navigate = useNavigate();

    // useEffect(() => {
    // getUserId();
    // }, []);

    function handleChange(event) {
        let {name, value} = event.target;
        setFormData(formData => ({...formData, [name]: value}));
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        addPreferences(formData);
        setFormData(userObj);
      }

      function handleClick(event) {
        navigate('/dashboard');
      }

    // async function getUserId(userId) {
    //     let options = {
    //       method: 'GET',
    //     }
    //     try {
    //         let response = await fetch('/users/1', options);
    //         if (response.ok) {
    //             let data = await response.json();
    //             // setUser(data);
    //         } else {
    //             console.log('Server error', response.statusText);
    //         }
    //     } catch (err) {
    //         console.log('Network error:', err.message);
    //     }
    //   }


    async function addPreferences(userPreferences) {
        let options = {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userPreferences)
        }
        try {
            let response = await fetch('/users/1', options);
            if (response.ok) {
                let data = await response.json();
                // setUser(data); redirect to dashboard page
            } else {
                console.log('Server error', response.statusText);
            }
        } catch (err) {
            console.log('Network error:', err.message);
        }
      }

    return (
        <div className="Preferences">
        <h2>Choose your preferences</h2>
        <UserForm handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} handleClick={handleClick}/>
        </div>
    );
}

export default Preferences;