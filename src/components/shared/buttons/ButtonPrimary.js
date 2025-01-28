import Link from "next/link";

const ButtonPrimary = ({ children, url, className }) => {
  return (
    <Link
      href={url ? url : "#"}
      className={`text-size-15 font-bold text-white-color capitalize py-17px px-35px ml-10px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 ${className} transition-all duration-300 `}
    >
      {children ? children : ""}
    </Link>
  );
};

export default ButtonPrimary;
