import { useState, useEffect } from "react"
import Stories from 'sp-react-insta-stories'
import Styles from "./styles.module.css"
import Button from '@mui/material/Button'
import { Input,TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
    useEffect(()=>{
      const singleStory = {
        url:mediaUrl,
        type:mediaType,
        header:{
            heading:header,
            subheading:subHeading,
            profileImage:profileImg,
        },
        // content: (()=> (<p style={{color:'white',margin:"auto"}}>{content}</p> ))
      }
      setSingleStory(singleStory);
    },[header,headerFont,mediaFile,mediaUrl,mediaType,content,contentFont,subHeading,profileImg])

    function addstory(){
        setWrite(false);
        setStories([...stories,singleStory]);
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
                {/* <input type="range" name="" id="" value={headerFont} onChange= {(e)=> setHeaderFont(e.target.value)}/> */}
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
                {/* <input type="file" name="" id="" value={mediaFile} onChange= {(e)=> setMediaFile(e.target.value)}/> */}
            </div>
            {/* <div>
                <label htmlFor="Content Text">Content Text</label>
                <input type="text" name="Content Text" value={content} onChange= {(e)=> setContent(e.target.value)} />
            </div> */}
            <Button style={{margin:"auto"}} onClick={addstory} variant="contained">Add Story</Button>
        </section>
        </>:<>
            <Button style={{margin:"auto"}} onClick={addMore} variant="contained">Add More Story</Button>
            
            </>
        }
        <div className={Styles.story}>
          <Stories
            loop
            keyboardNavigation = {true}
            stories={(write)?[singleStory]:stories}
            // height="100vh"
            defaultInterval={1000}
          />
        </div>
    
    </div> );
}
 
export default StoryForm;

// export {header,headerFont,mediaFile,mediaUrl,mediaType,content,contentFont,subHeading,pr}