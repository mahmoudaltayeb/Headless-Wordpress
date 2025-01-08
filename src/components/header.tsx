import LINK from "next/link";
import Image from "next/image";

export  function Header(){
    return (
        <header className="main flex justify-between items-center">
            <div className="grid">
                <Image 
                    src="/trend.webp"
                    alt="TrendDC"
                    width={220}
                    height={37}
                />
            </div>
            <div>
                menus
            </div>
        </header>
    )
}