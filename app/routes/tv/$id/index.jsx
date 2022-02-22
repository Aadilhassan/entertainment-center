import { ThemeProvider, Card } from "react-bootstrap";
import { useLoaderData, useParams, Link } from "remix";
 
export  async function loader({params}) {
  let res = await fetch('https://api.themoviedb.org/3/tv/'+params.id+'?api_key=8b62f4bda40c67dbe48ddb6db1f858dc');
console.log(res)
  return res.json();
}




export default function tv() {

  let { id } = useParams();
   
    let tv = useLoaderData();
    console.log(tv)
    let img = 'https://image.tmdb.org/t/p/w500';
    return (
      <div>

        <h1>Title:{tv.original_name}  </h1>
          Id: {id}


          <div style={{display:"flex",flexWrap:"wrap", justifyContent: "space-around"}}> 
          
          {tv.seasons.map(season => (


       
               <Card style={{ width: '12rem', marginTop: '40px' }}>
     <Card.Img variant="top" style={{ width: '10rem' }} src={img+tv.backdrop_path} />
       <Card.Body>
        <Card.Title> <Link to={'/tv/'+id+'/'+ season.season_number }> {season.name}</Link>
        Total episodes:  {season.episode_count}</Card.Title>
        {/* <Card.Text>{movie.overview}</Card.Text> */}
        </Card.Body>
        </Card>
          

      ))}
          </div>
      </div>
    );
  }