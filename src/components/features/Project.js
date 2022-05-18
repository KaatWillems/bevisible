import React from 'react'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'


function Project(props) {
  return (
 <>
        <div className='project-container'>    
          

            {/* img in the public folder: */}
            <a href={props.projectinfo.link} target="_blank">
                <img src={`/../../../${props.projectinfo.picture}`} 
                alt="projectpic" className='project-pic' />
            </a>

            {/* <img src={project1}
            className='project-pic' /> */}


            <p className='project-p'>{props.projectinfo.title}</p>

        </div>
      
 </>
  )
}

export default Project