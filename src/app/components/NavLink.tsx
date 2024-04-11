import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      className="text-white block py-2 pl-3 pr-4 sm:text-xl rounded md:text-lg hover:bg-gray-700 md:p-0"
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
