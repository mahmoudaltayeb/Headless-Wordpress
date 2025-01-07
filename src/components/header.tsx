import LINK from "next/link";
import Image from "next/image";

export  function Header(){
    return (
        <header className="flex justify-between items-center">
            <section className="grid">
                <Image 
                    src="/trend.webp"
                    alt="TrendDC"
                    width={220}
                    height={37}
                />
            </section>
        </header>
    )
}