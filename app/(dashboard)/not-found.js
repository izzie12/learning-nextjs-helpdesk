import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            
                <h2 className="text-3xl">Page Not Found</h2>
            
                <p>We can't find the page you are searching for.</p>
                <p><Link href="/tickets">
                    <a className="btn">Go back to the Dashbord</a>
                </Link></p>
            
        </main>
    )
}