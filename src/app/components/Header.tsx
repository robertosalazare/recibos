import { UserButton, useUser } from "@clerk/nextjs";
import { Container } from "./Container";
import { usePathname } from "next/navigation";
import Link from "next/link";

const headerOptions = [{ path: "/", text: "Recibos" }];

export const Header = () => {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <div className="shadow-sm shadow-gray-700">
      <Container className="flex justify-between w-full">
        <div className="flex">
          {headerOptions.map((item) => (
            <Link
              key={item.text}
              className={`p-4 cursor-pointer${
                item.path === pathname ? " border-b-2 border-b-white" : ""
              }`}
              href={item.path}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <span className="inline-block mr-2">{user?.firstName}</span>
          <UserButton />
        </div>
      </Container>
    </div>
  );
};
