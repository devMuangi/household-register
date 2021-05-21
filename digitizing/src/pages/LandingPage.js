import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
                
        <ul>
         
          <li>
            <Link to='/household-register'>Household Register</Link>
          </li>
          <li>
            <Link to='/all-households'>All households</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Households
              {/* <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span> */}
            </Link>
          </li>
        </ul>
        </div>
    )
}
