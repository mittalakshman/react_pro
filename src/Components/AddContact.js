import React from 'react';

 function Add(){
           return(
               <div className='ui main'>
                   <h2>AddContact</h2>
                   <form className="ui form">
                       <div className="field">
                           <label>Firstname</label>
                           <input type="text" name="name" placeholder="firstname"></input>
                       </div>
                       <div className="field">
                           <label>LastName</label>
                           <input type="text" name="name" placeholder="lastname"></input>
                       </div>
                       <div className="field">
                           <label>Email</label>
                           <input type="text" name="Email" placeholder="Email"></input>
                       </div>
                       <button classNam="ui button blue">Submit</button>
                       </form>
                 </div>
 
           )
       
           }


export default Add;
