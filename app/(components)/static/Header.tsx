import Link from "next/link";
import React from "react";
interface iNavs {
  id: number;
  name: string;
  url: string;
}

const Header = () => {
  const navdata: iNavs[] = [
    {
      id: 1,
      name: "Website",
      url: "/website",
    },
    {
      id: 2,
      name: "Pricing",
      url: "/pricing",
    },
    {
      id: 3,
      name: "More",
      url: "/more",
    },
  ];
  return (
    <div className="h-[80px] bg-gray-200 w-full flex justify-center items-center">
      <div className="w-[80%] flex justify-between items-center">
        <div>Logo</div>
        <div className="flex justify-center items-center gap-[20px]">
          {navdata.map((props: iNavs) => (
            <Link href={props.url} key={props.id}>
              <nav className="hover:text-blue-500 cursor-pointer">
                {props.name}
              </nav>
            </Link>
          ))}
        </div>
        <div className="flex justify-end items-center gap-[20px]">
          <Link href="/auth/register">
            <button className="hover:text-blue-500">Register</button>
          </Link>
          <Link href="/auth/login">
            <button className="hover:text-blue-500">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
