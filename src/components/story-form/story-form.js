import { useState, useEffect, useRef } from "react"
import Stories from 'sp-react-insta-stories'
import Styles from "./styles.module.css"
import Button from '@mui/material/Button'
import { Input,TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Draggable from "react-draggable"; // the library for draggable feature
const StoryForm = () => {
    const [header,setHeader] = useState('');
    const [mediaType,setMediaType] = useState('');
    const [mediaFile,setMediaFile] = useState('');
    const [mediaUrl,setMediaUrl] = useState('');
    const [content, setContent] = useState('');
    const [contentFont, setContentFont] = useState('');
    const [headerFont, setHeaderFont] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [write,setWrite] = useState(true);
    const [stories, setStories] = useState([]);
    const [singleStory, setSingleStory] = useState({});
    const dynamic = useRef()
    const bounds = useRef(); // used to define drag boundary
    const dy_text = useRef()
    useEffect(()=>{
      const singleStory = {
        url:mediaUrl,
        type:mediaType,
        header:{
            heading:header,
            subheading:subHeading,
            profileImage:profileImg,
        },
      }
      setSingleStory(singleStory);
    },[header,headerFont,mediaFile,mediaUrl,mediaType,content,contentFont,subHeading,profileImg])

    function addstory(){
        setWrite(false);
        setStories([...stories,singleStory]);
    }


    //function to update the text position when dragged
    function dragStopped(e,data){
        console.log(e,data);
        dy_text.current.style.top = `${data.y}px`
        dy_text.current.style.left = `${data.x}px`
    }

    //function to add text content when pressed "enter"
    function addText(){
        dynamic.current.style.display="block";
        function updateEl(e){
            console.log(e);
        }
        dynamic.current.addEventListener("dragstart",(e)=>updateEl(e))
        dynamic.current.addEventListener("keypress",(e)=>{
            if(e.keyCode === 13){
            e.target.style.display="none"
            dy_text.current.style.display="block"
            dy_text.current.innerText = e.target.value
            }
        })
    }

    

    function addMore(){

        setWrite(true);

        setSingleStory({});
    }


    return ( 
    <div className={Styles.content}>{
        (write) ? <>
        <section className={Styles.form}>
            <h3><bold>Basic Details</bold></h3>
            <div>
                <TextField id="outlined-basic" label="Profile Name" variant="outlined" value={header} onChange={(e)=> setHeader(e.target.value)}/>
            </div>
            <div>
                
                <TextField id="outlined-basic" label="Profile Pic Url" variant="outlined" value={profileImg} onChange={(e)=>setProfileImg(e.target.value)}/>
                
            </div>
            <div>
                <TextField id="outlined-basic" label="Sub Heading" variant="outlined" value={subHeading} onChange= {(e)=> setSubHeading(e.target.value)}/>
            </div>
            <div>

                <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Media Type</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={mediaType}
                    onChange={(e)=> setMediaType(e.target.value)}
                >
                    <FormControlLabel value="image" control={<Radio />} label="image" />
                    <FormControlLabel value="video" control={<Radio />} label="video" />
                </RadioGroup>
                </FormControl>
                <br />
                <TextField id="outlined-basic" label="Media Url" variant="outlined" value={mediaUrl} onChange= {(e)=> setMediaUrl(e.target.value)}/>
            </div>
            <Button style={{margin:"auto"}} onClick={addstory} variant="contained">Add Story</Button>
            
        </section>
        </>:<>
            <Button style={{margin:"auto"}} onClick={addMore} variant="contained">Add More Story</Button>
            
            </>
        }

        <div ref={bounds} className={Styles.story}>
          <Stories
            loop
            keyboardNavigation = {true}
            stories={(write)?[singleStory]:stories}
            defaultInterval={1000}
            className={Styles.el}
          />

          {/* draggable content */}

          <Draggable className={Styles.Draggable}
          bounds='parent'
          onMouseDown={(e) => console.log(e)}
          onStop={(e,data)=>dragStopped(e,data)}
          position={null}>
          <input type="text" ref={dynamic} className={Styles.dynamic}/>
          </Draggable>

          <span ref={dy_text} className={Styles.dy_text}></span>
          
        </div>
        <Button style={{margin:"auto"}} onClick={addText} variant="contained">Add Text</Button>
        
    
    </div> );
}
 
export default StoryForm;