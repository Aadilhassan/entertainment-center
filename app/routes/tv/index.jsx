import { Form, useLoaderData, redirect, Link } from "remix";
import { Card } from "react-bootstrap";

export async function loader() {
    let res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=8b62f4bda40c67dbe48ddb6db1f858dc`)
 return res.json();
}




export default function Index() {
// api --- 8b62f4bda40c67dbe48ddb6db1f858dc
    let img = 'https://image.tmdb.org/t/p/w500';
    let tvs = useLoaderData();

    return (
   <div style={{display:"flex",flexWrap:"wrap", justifyContent: "space-around"}}>
        {tvs.results.map(tv => (
        <Card style={{ width: '12rem', marginTop: '40px' }}>
     <Card.Img variant="top" style={{ width: '10rem' }} src={img+tv.poster_path} />
       <Card.Body>
        <Card.Title> <Link to={'/tv/'+ tv.id }>{tv.name}{tv.title}</Link></Card.Title>
        {/* <Card.Text>{movie.overview}</Card.Text> */}
        </Card.Body>
    </Card>
        ))}
</div>
    );
  }