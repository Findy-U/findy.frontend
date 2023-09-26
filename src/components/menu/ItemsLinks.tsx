import { Link } from 'react-router-dom';

interface ItemsLinksProps {
  title: string;
  linkURL: string;
}

export function ItemsLinks({ title, linkURL }: ItemsLinksProps) {
  return (
    <>
      <Link className="text-[18px] uppercase text-green-medium" to={linkURL}>
        {title}
      </Link>
      {/* <Link className="text-[18px] uppercase text-green-medium" to="/">
        A Findy
      </Link>
      <Link className="text-[18px] uppercase text-green-medium" to="/login">
        Login
      </Link> */}
    </>
  );
}
