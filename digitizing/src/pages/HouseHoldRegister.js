import React from 'react'
import { useHistory } from 'react-router-dom'
import HouseHoldRegisterForm from '../components/households/HouseHoldRegisterForm';


export default function HouseholdregisterPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
          'https://digitizing-moh-default-rtdb.firebaseio.com/household.json',
          {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then(() => {
          history.replace('/');
        });
      }
    
    return (
        <div>
            <section>
     <span>Welcome:</span> <h2>Register a New C.H.U</h2>
      <HouseHoldRegisterForm onAddMeetup={addMeetupHandler} />
    </section>
        </div>
    )
}
