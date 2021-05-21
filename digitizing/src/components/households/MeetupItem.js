import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        name: props.name,
        code: props.code,
        link: props.link,
        chv: props.chv,
        village: props.village,
        startDate: props.startDate,
        county: props.county,
        subCounty: props.subCounty,
        division: props.division,
        location: props.location,
        subLocation: props.subLocation,
        endDate: props.endDate,

      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>

        <div className={classes.content}>
          <h3>{props.name}</h3>
          <address>{props.code}</address>
          <p>{props.link}</p>
          <p>{props.chv}</p>
          <p>{props.village}</p>
          <p>{props.startDate}</p>
          <p>{props.county}</p>
          <p>{props.subCounty}</p>
          <p>{props.division}</p>
          <p>{props.location}</p>
          <p>{props.subLocation}</p>
          <p>{props.endDate}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
