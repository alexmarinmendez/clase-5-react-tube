import { useEffect, useState } from 'react';
import Video from '../components/Video';
import dataFromDB from '../utils/data';
import fetchData from '../utils/fetchData';

const Videos = () => {
  const [data, setData] = useState([]);

  //componentDidMount 
  useEffect(() => { //hook en react
    //DB call 
    fetchData(2000, dataFromDB) //datafromDB => async mock
      .then(result => setData(result))
      .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
    console.log(`Deleting video ${id}`);
  }

  return (
    <>
      {
        data.map(item => (
          <Video
          key={item.id}
        id={item.id}
        title={item.title}
        dateAdded={item.dateAdded}
        channel={item.channel}
        thumbnail={item.thumbnail}
        description={item.description}
        handleDelete={handleDelete} />
        ))
      }
    </>
  );
}

export default Videos;