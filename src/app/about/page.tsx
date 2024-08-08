import Link from 'next/link';

const About = () => {
  return (
    <div className="h-[1000px]">
      <h1>About Page</h1>
      <Link href={'/intercepting-routes/notes'} className="mt-5">
        Go to Notes
      </Link>
    </div>
  );
};

export default About;
