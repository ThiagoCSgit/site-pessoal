import Image from "next/image";
import Link from "next/link";
import MenuClose from "@/components/Icons/MenuClose";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Menu({ isVisible, onClose }: MenuProps) {
  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } fixed inset-0 h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}
      onClick={onClose}
    >
      <div
        className="w-full bg-t-blue-900 h-96 shadow-md py-4 px-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-5">
          <Link href="/">
            <Image
              src="/favicon.ico"
              width={55}
              height={55}
              alt="Ícone de favorito"
            />
          </Link>
          <button onClick={onClose}>
            <MenuClose className="fill-white w-10 h-10" />
          </button>
        </div>
        <nav className="flex flex-col gap-5 text-xl p-5 items-center">
          <Link href="/" onClick={onClose}>
            About me
          </Link>
          <Link href="/contacts" onClick={onClose}>
            Contact me
          </Link>
        </nav>
      </div>
    </div>
  );
}
