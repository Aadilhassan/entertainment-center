import { ThemeProvider, Card } from "react-bootstrap";
import { useLoaderData, useParams, Link } from "remix";
 
// export  async function loader({params}) {
//   let res = await fetch('https://api.themoviedb.org/3/tv/'+params.id+'/season/'+params.se+'?api_key=8b62f4bda40c67dbe48ddb6db1f858dc');
// console.log(res)
//   return res.json();
// }



export default function tv() {

  let { se } = useParams();
   let {id } = useParams();
   let {ep} = useParams();

   let link = 'https://database.gdriveplayer.us/player.php?type=series&tmdb='+id+'&season='+se+'&episode='+ep

    let tv = useLoaderData();
    console.log(tv)
    let img = 'https://image.tmdb.org/t/p/w500';
    return (
      <div>

<iframe
  style={{width: '96vw', height:'96vh', alignSelf: 'center'}}
  sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation allow-fullscreen"
  src={link}
  allowfullscreen
/>

{/* {link} */}

   
    
      </div>
    );
  }