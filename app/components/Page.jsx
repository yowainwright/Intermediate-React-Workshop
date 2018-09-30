import Link from 'next/link';

const Page = props => (
  <div>
    <Link href="/">
      <a>
        <h1>Take Notes!</h1>
      </a>
    </Link>
    {props.children}
  </div>
);

export default Page;
