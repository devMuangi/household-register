import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';

export default function LandingPage() {
    return (
        <div>
        
        
        <Link to='/household-register'>
        <Card>
           Household Register
         </Card>  
         </Link>      
   
           <Link to='/all-households'>
             <Card>
             All households
             </Card>
             </Link>
         
         
           <Link to='/favorites'>
             My Households
             {/* <span className={classes.badge}>
               {favoritesCtx.totalFavorites}
             </span> */}
           </Link>
         
       
        
        </div>
    )
}
