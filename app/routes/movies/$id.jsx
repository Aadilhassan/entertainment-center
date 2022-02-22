import { useLoaderData , useParams} from "remix";
export async function loader({params}) {
    let res = await fetch('https://api.themoviedb.org/3/movie/'+params.id+'?api_key=8b62f4bda40c67dbe48ddb6db1f858dc')
 return res.json();
}


export default function id() {
    let movie = useLoaderData();
    console.log(movie)
    const id = useLoaderData();
    return (
      <div>
        <h1>Title:{movie.title}  </h1>
          Id: {movie.id}
          
      </div>
    );
  }