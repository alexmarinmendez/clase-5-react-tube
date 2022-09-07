import { useEffect } from 'react';
import Video from '../components/Video';

const Videos = () => {
  
  //componentDidMount 
  useEffect(() => { //hook en react
    //DB call 
    console.log(`Videos component did mount`);
  }, []);

  const handleDelete = (id) => {
    console.log(`Deleting video ${id}`);
  }

  return (
    <>
      <Video
        id="1"
        title="Rod Stewart - Young Turks (Official Video)"
        dateAdded="2009-10-29T21:26:05Z"
        channel="Rod Stewart"
        thumbnail="https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg"
        description="Official music video for Rod Stewart – Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ..."
        handleDelete={handleDelete} />
      <Video
        id="2"
        title="Rod Stewart - Baby Jane (Official Video)"
        dateAdded="2014-03-01T01:35:21Z"
        channel="Rod Stewart"
        thumbnail="https://i.ytimg.com/vi/dxl2r6GuL2w/mqdefault.jpg"
        description="Official music video for Rod Stewart – “Baby Jane” from 'Body Wishes' (1983) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr Watch all ..."
        handleDelete={handleDelete}  />
      <Video
        id="3"
        title="Bizcocho marmolado de naranja. SUPERESPONJOSO"
        dateAdded="2019-09-25T18:16:56Z"
        channel="Anna recetasfaciles"
        thumbnail="https://i.ytimg.com/vi/3GwA45Bcvrs/mqdefault.jpg"
        description="Compra mi libro de recetas COCINA PARA TRIUNFAR en este link https://amzn.to/2UPUhNZ Mi sartén Tefal Aroma 24 cm https://amzn.to/2WSFjLf Batidora de ..."
        handleDelete={handleDelete}  />
      <Video
        id="4"
        title="Jarabe De palo - Ying Yang"
        dateAdded="2008-12-04T14:37:33Z"
        channel="Warner Music Spain"
        thumbnail="https://i.ytimg.com/vi/JSH321S6tGc/mqdefault.jpg"
        description="" 
        handleDelete={handleDelete} />
      <Video
        id="5"
        title="La Niña: ¿Podrá Latinoamérica plantarle cara?"
        dateAdded="2021-10-23T00:15:00Z"
        channel="DW Español"
        thumbnail="https://i.ytimg.com/vi/AsiUBtAQ4wU/mqdefault.jpg"
        description="Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo." 
        handleDelete={handleDelete} />
    </>
  );
}

export default Videos;