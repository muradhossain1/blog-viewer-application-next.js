import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";


const Navber = async () => {
    const { getUser } =  getKindeServerSession();
    const user = await getUser();
    const navLinks = <>
        <li><Link className="text-base font-semibold" href='/'>Home</Link></li>
        <li><Link className="text-base font-semibold" href='/profile'>Profile</Link></li>
        <li><Link className="text-base font-semibold" href='/about'>About</Link></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 top-0 bg-orange-100 md:px-10 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <p className="text-lg md:text-2xl font-bold">Blog Application</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   { user ?  <Link href='/api/auth/logout' className="px-5 py-2 text-white rounded-md bg-gray-700 hover:bg-gray-700">Logout</Link> :  <Link href='/api/auth/login' className="px-5 py-2 text-white rounded-md bg-gray-700 hover:bg-gray-700">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navber;