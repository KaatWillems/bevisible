import React from 'react'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'


function Project(props) {
  return (
 <>
        <div className='project-container'>

       
            <img src={`/static/media/${props.projectinfo.picture}`} 
            alt="projectpic" className='project-pic' />

            {/* <img src={project1}
            className='project-pic' /> */}



            <p>{props.projectinfo.title}</p>

            {/* <p>{props.projectinfo.projects.link}</p> */}
        </div>
      
 </>
  )
}

export default Project