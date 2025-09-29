import WebsiteLogo from "./logo.png";
import Image from 'next/image'
import Link from "next/link";

const Logo = ({shadow = false}: {shadow?: boolean}) => {
    return (
        <Link href={"/"} className="flex items-center cursor-pointer p-2">
            {/* fixed-size wrapper with subtle shadow */}
            <div className={`w-16 h-16 relative overflow-hidden rounded-lg ${shadow && "shadow-sm"} bg-white`}>
                <Image
                    src={WebsiteLogo}
                    alt="Panda Mart"
                    fill
                    className="object-contain scale-125"
                />
            </div>
            <p className="text-orange-600 text-xl font-black tracking-tight ml-2">
                Panda Mart
            </p>
        </Link>
    );
};

Logo.displayName = "Logo";
export default Logo;