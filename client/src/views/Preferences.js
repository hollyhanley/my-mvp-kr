import React, { useEffect, useState } from "react";
import UserForm from '../components/UserForm';

function Preferences() {

    let [user, setUser] = useState({});

    useEffect(() => {
    getUserId();
    }, []);

    function handleChange(event) {
        let {name, value} = event.target;
        setFormData(formData => ({...formData, [name]: value}));
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        props.addPreferencesCb(formData);
        setFormData(blankForm);
      }

    async function getUserId(userId) {
        let options = {
          method: 'GET',
        }
        try {
            let response = await fetch('/users/1', options);
            if (response.ok) {
                let data = await response.json();
                setUser(data);
            } else {
                console.log('Server error', response.statusText);
            }
        } catch (err) {
            console.log('Network error:', err.message);
        }
      }


    async function addPreferences(userPreferences) {
        let options = {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userPreferences)
        }
        try {
            let response = await fetch('/users', options);
            if (response.ok) {
                let data = await response.json();
                setUser(data);
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
        <UserForm handleSubmit={addPreferences}/>
        </div>
    );
}

export default Preferences;