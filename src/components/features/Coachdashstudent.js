import React from 'react'
import pic1 from '../../images/profile1.png'


function Coachdashstudent() {
  return (
    <div className='pprojects-container dashboard'> 
    
        <div className='dashboard-Pic-name-container'>
                <img src={pic1} alt="profilepic" className='profilepic dash'/>
                <h5 className="newname"> Kaalotte Smith </h5>
        </div>
        <div className='dashboard-separator-line'></div>

        <div className="promotion"> 
             <label htmlFor="promotion">Choose a promotion:</label>
                 <select id="promotion" name="promotion">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                 </select>  
        </div> 
                                                    
        <div className='dashboard-separator-line'></div>

        <div className="dashboardbtncontainer"> 
            {/*<button className="btn coachdash assign"> Assign promotion </button>*/}
            <button className="btn coachdash">  Validate </button>
         </div> 
    </div>
  )
}

export default Coachdashstudent