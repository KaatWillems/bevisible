
import React, {useState} from 'react';
import Inputfield from './Inputfield'
import { faUpload } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'
import profiledata from '../profiledata.json'


const PopupAbout = (props) => {

const [profile, setProfile] = useState(profiledata[0])

  return (
    <>
        <h2>Edit your description</h2> 
         
                <div contentEditable={true}>  {profile.about} </div>
      </>
  )
}

export default PopupAbout;