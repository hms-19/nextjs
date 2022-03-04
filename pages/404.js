import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)
    },[]);

    return ( 
        <div className="not-found">
            <h1>Opps...</h1>
            <h2>This page can not be found</h2>
            <p>Go back to <Link href="/">Home</Link></p>
        </div>
     );
}
 
export default NotFound;