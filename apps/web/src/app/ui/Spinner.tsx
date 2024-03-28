
import Image from "next/image";

export function Spinner() {
  return (
    <Image
      className="text-blue-50 animate-spin"
      width={24}
      height={24}
      src="/spinner.svg"
      alt="GitHub User Avatar Image"
    />
  );
}
