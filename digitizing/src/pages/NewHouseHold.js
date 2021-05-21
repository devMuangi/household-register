import { useHistory } from 'react-router-dom';

import NewHouseHoldForm from '../components/households/NewHouseHoldForm';

function NewHouseHoldPage() {
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
    <section>
     <span>Welcome:</span> <h2>Register a New C.H.U</h2>
      <NewHouseHoldForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewHouseHoldPage;
