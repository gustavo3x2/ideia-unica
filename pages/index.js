import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1> 
            <Link href='/sobre'>
                <a>Acessar página sobre</a>
            </Link>
            <Link href='/tempo'>
                <a>Acessar página tempo</a>
            </Link>
        </div>
    )         
}


export default Home;