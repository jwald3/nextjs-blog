import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img
                        src="https://user-images.githubusercontent.com/59290280/199432637-b32f9eac-4b37-4c24-91bc-0b4d9f4b1921.png"
                        className="w-44 object-contain cursor-pointer"
                        alt="page logo"
                    />
                </Link>
            </div>
            <div className="flex space-x-5">
                <div className="hidden md:inline-flex items-center space-x-5">
                    <Link href="https://jordanwaldoriesel.com/">
                        <h3>Portfolio</h3>
                    </Link>
                    <Link href="https://twitter.com/jwald33">
                        <h3>Follow</h3>
                    </Link>
                </div>
                <div className="flex items-center md:space-x-4 lg:space-x-5 text-green-600">
                    <h3
                        className="text-white bg-green-600 px-4 py-1 rounded-full"
                        onClick={() =>
                            window.open(
                                "mailto:jordan.riesel@gmail.com?subject=Subject&body=Body%20goes%20here"
                            )
                        }
                    >
                        Contact Me
                    </h3>
                </div>
            </div>
        </header>
    );
}

export default Header;
