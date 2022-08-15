
import { useParams } from 'react-router-dom'
import { getAlbum } from '../data';

export default function AlbumCover() {

   let params = useParams();
   console.log(params, "params")
   let album = getAlbum(params.coverTitle)
   return (
      <div>
         <h2>Album Cover for {album.title}</h2>
         <img src={album.img} />
      </div>
   ) 
}