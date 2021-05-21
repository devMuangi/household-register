import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewHouseHoldForm(props) {
  const nameInputRef = useRef();
  const codeInputRef = useRef();
  const linkInputRef = useRef();
  const chvInputRef= useRef();
  const villageInputRef = useRef();
  const startDateInputRef = useRef();
  const countyInputRef = useRef();
  const subCountyInputRef = useRef();
  const divisionInputRef = useRef();
  const locationInputRef = useRef();
  const subLocationInputRef = useRef();
  const endDateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCode = codeInputRef.current.value;
    const enteredLink = linkInputRef.current.value;
    const enteredChv = chvInputRef.current.value;
    const enteredVillage = villageInputRef.current.value;
    const enteredStartDate = startDateInputRef.current.value;
    const enteredCounty = countyInputRef.current.value;
    const enteredSubCounty = subCountyInputRef.current.value;
    const enteredDivision = divisionInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredSubLocation = subLocationInputRef.current.value;
    const enteredEndDate = endDateInputRef.current.value;

    const meetupData = {
      name: enteredName,
      code: enteredCode,
      link: enteredLink,
      chv: enteredChv,
      village: enteredVillage,
      startDate: enteredStartDate,
      county: enteredCounty,
      subCounty: enteredSubCounty,
      division: enteredDivision,
      location: enteredLocation ,
      subLocation: enteredSubLocation,
      endDate: enteredEndDate,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Name of C.H.U</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>M.C.H.U.L CODE</label>
          <input type='text' required id='code' ref={codeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Link Facility</label>
          <input type='text' required id='link' ref={linkInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Name of C.H.V</label>
          <input type='text' required id='chv' ref={chvInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Name of Village</label>
          <input type='text' required id='title' ref={villageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Start date</label>
          <input type='date' required id='title' ref={startDateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>County</label>
          <input type='text' required id='title' ref={countyInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Sub-County</label>
          <input type='text' required id='title' ref={subCountyInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Division</label>
          <input type='text' required id='title' ref={divisionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Location</label>
          <input type='text' required id='title' ref={locationInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Sub-Location</label>
          <input type='text' required id='title' ref={subLocationInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>End-Date</label>
          <input type='date' required id='title' ref={endDateInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Household</button>
        </div>
      </form>
    </Card>
  );
}

export default NewHouseHoldForm;
