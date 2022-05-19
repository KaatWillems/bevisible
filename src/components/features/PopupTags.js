import React, {useState} from 'react';
import Inputfield from './Inputfield'
import { faUpload } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Project from './Project'
import profiledata from '../profiledata.json'

const PopupTags = (props) => {


  const [profile, setProfile] = useState(profiledata[0])

  let Tagsbutton = profile.tags.map((tag, index) => {
   return <button className='tagButton2'>{tag}</button> 
 }) 

  return (
    <div>
    {Tagsbutton} 
    <h4 className="addTag"> Add a new tag </h4>
    <div> 
    <Inputfield name="Tags" type="text" placeholder="Add a new tag" className="tagButton" /></div>
    </div> 
  )
}

export default PopupTags;