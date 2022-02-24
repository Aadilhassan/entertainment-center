import { Form, useLoaderData, redirect, Link } from "remix";
import { Card } from "react-bootstrap";

export async function loader() {
    let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8b62f4bda40c67dbe48ddb6db1f858dc`)
 return res.json();
}




export default function Index() {
// api --- 8b62f4bda40c67dbe48ddb6db1f858dc
    let img = 'https://image.tmdb.org/t/p/w500';
    let movies = useLoaderData();
//    let movies = Array.from(useLoaderData());

    return (
   <div style={{display:"flex",flexWrap:"wrap", justifyContent: "space-around"}}>
        {movies.results.map(movie => (
        <Card style={{ width: '10rem', marginTop: '40px' }}>
     <Card.Img variant="top" style={{ width: '10rem' }} src={img+movie.poster_path} />
       <Card.Body>
        <Card.Title> <Link to={'/movies/'+ movie.id }>{movie.title}</Link>
        <Link to={'/tv/'+ movie.id} >{movie.name}</Link>
        </Card.Title>
        {/* <Card.Text>{movie.overview}</Card.Text> */}
        </Card.Body>
    </Card>
        ))}
</div>
    );
  }