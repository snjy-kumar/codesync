import { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const LandingPage: FC = () => {
  return (
    <>
      <Head>
        <title>Code Craft - Landing</title>
        <meta name="description" content="Code Craft - Build, test, and deploy your code with ease." />
      </Head>
      <div className="container mx-auto p-6">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Code Craft</h1>
          <p className="text-xl mb-4">Build, test, and deploy your code with ease.</p>
          <Link className="btn btn-primary" href="/signup">
            Get Started
          </Link>
        </header>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Code editing with support for multiple languages.</li>
            <li>Real-time collaborative coding sessions.</li>
            <li>Customizable themes and preferences.</li>
            <li>Secure user authentication with Clerk.</li>
            <li>Dashboard to monitor coding statistics.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-lg">
            Sign up today and start building with Code Craft.
          </p>
          <Link href="/signup" className="btn btn-primary mt-4">
             Sign Up 
          </Link>
        </section>

        <footer className="mt-10 text-center">
          <p className="text-sm">© 2025 Code Craft. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
