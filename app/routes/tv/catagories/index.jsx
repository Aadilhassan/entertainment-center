import { Form, useLoaderData, redirect, Link } from "remix";
import { Card, Container } from "react-bootstrap";
 

// export async function loader() {
//     let res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=8b62f4bda40c67dbe48ddb6db1f858dc&with_genres=12`)
//  return res.json();
// }

export async function loader() {
    let genres= [
        {
        "id": 28,
        "name": "Action"
        },
        {
        "id": 12,
        "name": "Adventure"
        },
        {
        "id": 16,
        "name": "Animation"
        },
        {
        "id": 35,
        "name": "Comedy"
        },
        {
        "id": 80,
        "name": "Crime"
        },
        {
        "id": 99,
        "name": "Documentary"
        },
        {
        "id": 18,
        "name": "Drama"
        },
        {
        "id": 10751,
        "name": "Family"
        },
        {
        "id": 14,
        "name": "Fantasy"
        },
        {
        "id": 36,
        "name": "History"
        },
        {
        "id": 27,
        "name": "Horror"
        },
        {
        "id": 10402,
        "name": "Music"
        },
        {
        "id": 9648,
        "name": "Mystery"
        },
        {
        "id": 10749,
        "name": "Romance"
        },
        {
        "id": 878,
        "name": "Science Fiction"
        },
        {
        "id": 10770,
        "name": "TV Movie"
        },
        {
        "id": 53,
        "name": "Thriller"
        },
        {
        "id": 10752,
        "name": "War"
        },
        {
        "id": 37,
        "name": "Western"
        }
        ];
    return genres
};

export default function Index() {
// api --- 8b62f4bda40c67dbe48ddb6db1f858dc
    let img = 'https://image.tmdb.org/t/p/w500';
    let generes = useLoaderData();
//    let movies = Array.from(useLoaderData());

    return (
        <div>
        <h1 style={{textAlign: "center"}}>Series Catagories</h1>
   <div style={{display:"flex",flexWrap:"wrap", justifyContent: "space-around"}}>

  
     
      {generes.map(genere => (
<Container>
<Link to={'/tv/catagories/'+genere.id} style={{textDecoration: 'none', color: '#fff',}}>  <Card style={{marginTop: '60px' , width: '10rem',background: 'black', padding: '40px',  borderRadius: '10px'}}><Card.Body>
      <div >{genere.name} {genere.id}</div>
      </Card.Body>
      </Card>
      </Link></Container>
      ))}
    </div>
</div>
    );
  }