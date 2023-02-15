// import Stories from 'sp-react-insta-stories'
// import { useState, useEffect } from 'react';
// import {header,headerFont,mediaFile,mediaUrl,mediaType,content,contentFont,subHeading,profileImg} from "../story-form/story-form"
// const Story = () => {
//     const [stories, setStories] = useState([]);

//     useEffect(()=>{
//       const story = {
//         url:mediaUrl,
//         type:mediaType,
//         header:{
//           header:{
//             heading:header,
//             subheading:subHeading,
//             profileImage:profileImg,
//           }
//         }
//       }
//       setStories([...stories,story]);
//     },[header,headerFont,mediaFile,mediaUrl,mediaType,content,contentFont,subHeading,profileImg])

//       return (
//         <div className="App">
//           <Stories
//             loop
//             keyboardNavigation = {true}
//             stories={stories}
//           />
//         </div>
//       );
// }
 
// export default Story;