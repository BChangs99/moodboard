import AM from './assets/AM.png'
import flowerboy from './assets/flowerboy.jpg'
import vancejoy from './assets/vancejoy.jpg'

let albumCovers = [
   {
      artist: "Arctic Monkeys",
      title: "AM",
      img: AM,
   },
   {
      artist: "Vance Joy",
      title: "Dream Your Life Away (Special Edition)",
      img: vancejoy,
   },
   {
      artist: "Tyler The Creator",
      title: "Flower Boy",
      img: flowerboy,
   }
]

export function getAlbumCovers() {
   return albumCovers
}

export function getAlbum(title) {
   return albumCovers.find(
      (album) => album.title === title
   )
}