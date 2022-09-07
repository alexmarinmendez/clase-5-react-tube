import { useEffect, useState } from "react";

const Video = ({id, thumbnail, title, dateAdded, channel, description, handleDelete}) => {
    const [rate, setRate] = useState(0); //hook
    
    //componentDidMount
    useEffect(() => {
        console.log(`Video component did mount ${id}`);
    }, []);

    //componentDidUpdate
    useEffect(() => {
        console.log(`Video Component did update ${id}`);
    }, [rate]);

    const handleRate = () => {
        // rate+=1;
        setRate(rate+1);
    }

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{title}</h3>
            <button onClick={handleRate}>Rate</button> {rate} starts 
            <button onClick={() => handleDelete(id)}>Delete video</button>
            <p>Upload date: {dateAdded}</p>
            <h4>Channel's Title: {channel}</h4>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;