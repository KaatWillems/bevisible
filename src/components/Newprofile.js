import React, {useRef, useState} from 'react'
import Backedit from './features/Backedit'
import Inputfield from './features/Inputfield'
import Button from './features/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons' 
import Navbar from './features/Navbar'
import Axios from 'axios'



//const initialValues = 
// {
//   picture: picture, 
//   firstname: firstname, 
//    lastname: lastname,
//    title: title,
//    status: status,
//    tags: [tag1, tag2, tag3],
//    about: aboutme,
//    work: {
//      position: jobposition, 
//      duration: jobduration
//     },
//   education: {
//     school: institute,
//     graduation: graduationyear
//     },
//   interests: interests,
//   cvlink: "",
//   socials: {
//       email: email,
//       github: socialmedia1,
//       linkedin: socialmedia2,
//       website: email
//     }
//   }

  function getCookie(cname) {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return null
  }

function Newprofile(props) {


const [form, setForm] = useState('');
//const [form, setForm] = useState(initialValues);


const handleChange = event => {
    const target = event.target                              
   event.preventDefault(); 
   setForm({...form, [target.name]: target.value})
  
   // const {name, value} = event.target.value; 
   // setValue({...values, [name]: value,})
}

const handleSubmit = event => {
event.preventDefault();
//console.log(form)

  const submitUser = async (token, picture, firstname, lastname, title, status, tag1, tag2, tag3, aboutme, jobposition, jobduration, institute, graduationyear, interests, email, socialmedia1, socialmedia2 ) => {

    let res = await fetch("https://bevisible-backend.herokuapp.com/user/profile/new", {
      method:'POST',
      //mode: "no-cors",
      headers:{
        "Content-Type": "application/json",
        // 'x-access-token': `Token ${getCookie("token")}`,
         'x-access-token': ` ${getCookie("token")}`,
      }, 
       body: JSON.stringify({ 
         form
       })
        // picture: "https://res.cloudinary.com/dwna6jxmr/image/upload/v1653311651/vrg8enktshuxzgbzqehm.png", 
        // firstname: firstname, 
        //  lastname: lastname,
        //  title: title,
        //  status: status,
        //  tags: [tag1, tag2, tag3],
        //  about: aboutme,
        //  work: {
        //    position: jobposition, 
        //    duration: jobduration
        //   },
        // education: {
        //   school: institute,
        //   graduation: graduationyear
        //   },
        // interests: interests,
        // cvlink: "",
        // socials: {
        //     email: email,
        //     github: socialmedia1,
        //     linkedin: socialmedia2,
        //     website: email
        //   }
        //
        //})
    })
    
      const json = await res.json()
      const data = await json
      setForm(data.form)
      console.log("formdata :", form)

    console.log(json)
    console.log("helloo??")
  }

  submitUser()




}
   // console.log(title)
   // setForm({
   //  ...form, [event.target.name]: value
   //  })
   
//CLOUDINARY UPLOAD PIC
// const [imageSelected, setImageSelected] = useState();

// const uploadImage = () => {
//   console.log(imageSelected)
//   const formData = new FormData()
//   formData.append("file", imageSelected)
//   formData.append("upload_preset", "fth0jlhu")

//   Axios.post("https://api.cloudinary.com/v1_1/dwna6jxmr/image/upload", formData).then((response) => {
//  console.log(response);
//   })

// };


  



  return (
   <>
      <Backedit />
      <div className='newprofile-container'>
         
         <form  onSubmit={handleSubmit} id="newprofile">
           
          <div className='newprofile-top-container'>
              <h1 className='newprofile-title'> Your profile</h1>
              <div className='newprofile-subtitle'>Enter your resume information.</div>
              
              <input
                className="newprofile-uploadinput"
                id="uploadprofilepic"
                name="picture"
                value={form.picture}
                type="file"
                placeholder="Choose a profile picture"
               // onChange={(event) => {setImageSelected(event.target.files[0]);
                //}}
              />
               <div className='blue-circle'> <label htmlFor="uploadprofilepic" className='label-upload-profile-pic'>Choose profile picture</label></div> 
              <Button className='btn' value="Upload picture" 
              //onClick={uploadImage}
              />
              
          </div>
    <img cloudName="dwna6jxmr" publicId="jcl2x1jdd1jdf2vdsevd" />

  
  
          <div className='newprofile-wrapper name-title'>
            <div className='input-container'>    
              <Inputfield 
              name="firstname" 
              placeholder="Add first name" 
              value={form.firstname} 
              onChange={handleChange}  
              className="newprofile-input" />
              
              <Inputfield 
              name="lastname" 
              placeholder="Add last name" 
              value={form.lastname} 
              onChange={handleChange}  
              className="newprofile-input" />
                
              <Inputfield 
              name="title" 
              value={form.title} 
              onChange={handleChange} 
              placeholder="Add title (e.g. Full Stack Developer)" 
              className="newprofile-input" />

              <Inputfield 
              name="status" 
              value={form.status} 
              onChange={handleChange} 
              placeholder="Add your goal (e.g. internship)" 
              className="newprofile-input" />
            </div>
          </div>
    
          <div className='newprofile-wrapper projects-'>
            <div className='newprofile-smalltitle'>Projects</div>
            <div className='input-container'>
  
            <div className="newprofile-uploadinput-container">
              <input
                className="newprofile-uploadinput"
                id="uploadfile"
                name="uploadfile"
                type="file"
                placeholder="Upload a project picture"
              />
              <label htmlFor="uploadfile" className="upload-icon-label">  <FontAwesomeIcon icon={faUpload} className='upload-icon'/> <br /> Upload picture  </label>
              <div>
                
                 
              </div>          
              
            </div>        
        
              <Inputfield 
              name="projectlink"  
              value={form.projectlink} 
              onChange={handleChange}  
              placeholder="Add project link" 
              className="newprofile-input" />
              
              <Inputfield 
              name="projecttitle"  
              value={form.projecttitle} 
              onChange={handleChange}  
              placeholder="Add project title" 
              className="newprofile-input" />
            </div>
          </div>
    



          <div className='newprofile-wrapper aboutmex-'>
            <div className='newprofile-smalltitle'>About me</div>
            <div className='input-container input-container-aboutme'>
              <label htmlFor="about me" className="label-about-me"> Add some more info about you in the description, and add programming languages. Companies will be able to filter on these languages.  </label>
              <Inputfield 
              placeholder="Add description" 
              className="newprofile-input" 
              id="about"
              name="aboutme"  
              value={form.aboutme} 
              onChange={handleChange}  
               />         
               {/* <label htmlFor="about me" className="label-about-me"> Add some more info about you. Don’t forget to mention what you are currently looking for. (internship, full time position...) </label> */}
              <Inputfield 
              placeholder="Add programming language" 
              className="newprofile-input" 
              id="tag1"
              name="tags"  
              value={form.tag1} 
              onChange={handleChange}  
               />      
                    <Inputfield 
              placeholder="Add programming language" 
              className="newprofile-input" 
              id="tag2"
              name="tags"  
              value={form.tag2} 
              onChange={handleChange}  
               />   
                    <Inputfield 
              placeholder="Add programming language" 
              className="newprofile-input" 
              id="tag3"
              name="tags"  
              value={form.tag3} 
              onChange={handleChange}  
               />      
            </div>
          </div>
    
    
          <div className='newprofile-wrapper workexp-'>
            <div className='newprofile-smalltitle'>Working experience</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add job position" 
              className="newprofile-input"
              name="work.position"  
              value={form.jobposition} 
              onChange={handleChange}   />    
              <Inputfield 
              placeholder="Add duration of employment" 
              className="newprofile-input"
              name="work.duration"  
              value={form.jobduration} 
              onChange={handleChange}
               /> 

              <a href="https://www.google.com/" className='add-another-link'>Add another working experience</a>    
            </div>
          </div>


          <div className='newprofile-wrapper eduaction-'>
            <div className='newprofile-smalltitle'>Education</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add educational institute" 
              className="newprofile-input"
              name="education.school"  
              value={form.institute} 
              onChange={handleChange}
               />    
              <Inputfield 
              placeholder="Add year of graduation" 
              className="newprofile-input"
              name="education.graduation"  
              value={form.graduationyear} 
              onChange={handleChange}
               /> 

              <a href="https://www.google.com/" className='add-another-link'>Add another education</a>    
            </div>
          </div>


          <div className='newprofile-wrapper interests-'>
            <div className='newprofile-smalltitle'>Interests</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add interests divided by  -" 
              className="newprofile-input" 
              name="interests"  
              value={form.interests} 
              onChange={handleChange}
              />    
            </div>
          </div>


          <div className='newprofile-wrapper findmeon-'>
            <div className='newprofile-smalltitle'>Find me on</div>
            <div className='input-container'>
             
              <Inputfield 
              placeholder="Add your e-mail addresss"  
              className="newprofile-input"
               name="socials.email"  
              value={form.email} 
              onChange={handleChange} />
              <Inputfield 
              placeholder="Add link to your Github" 
              className="newprofile-input"
              name="socials.github"  
              value={form.socialmedia1} 
              onChange={handleChange}
                />
              <Inputfield 
              placeholder="Add link to your Linkedin"  
              className="newprofile-input"
              name="socials.linkedin"  
              value={form.socialmedia2} 
              onChange={handleChange} />    
              
            </div>

           
          </div>
          <div className='newprofile-btn-container'>
           <Button className="btn profilesubmit" form="newprofile" value="Submit" /></div>
         
         </form> 

      </div>
      <Navbar id={props.id} />
   </>
  )
}

export default Newprofile