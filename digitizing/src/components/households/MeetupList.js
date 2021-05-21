import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          // image={meetup.image}
          name={meetup.name}
          code={meetup.code}
          link={meetup.link}
          chv={meetup.chv}
          village={meetup.village}
          startDate={meetup.startDate}
          county={meetup.county}
          subCounty={meetup.subCounty}
          division={meetup.division}
          location={meetup.location}
          subLocation={meetup.subLocation}
          endDate={meetup.endDate}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
