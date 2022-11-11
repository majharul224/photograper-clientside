import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../../images/icons/footericon.jpg'
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, signout } = useContext(AuthContext)
    // console.log(user)
    // console.log(user.email)

    // signOut
    const handleSignOut = () => {
        // console.log("helle")
        signout()
            .then(() => {
                toast.success("signout")
            })
            .catch(error => toast.error(error.message))
    }

    const menuItems =
        <>
            <li className='font-semibold'><Link to='/'>Home</Link> </li>
            <li className='font-semibold'><Link to='/services'>Service</Link> </li>
            <li className='font-semibold'><Link to='/blogs'>Blogs</Link> </li>
            {
                user?.email ?
                    <>

                        <li>
                            <Link to='/myReview'>My Review</Link>
                        </li>
                        <li>
                            <span>{user?.displayName}</span>
                            <button onClick={handleSignOut}>Log out</button>

                        </li>
                    </>
                    :
                    <li>
                        <Link to='/login'> LogIn</Link>
                    </li>
            }
        </>
    return (
        <div className="navbar mb-12 mt-12 bg-base-100">
            <div className="navbar-start">
                {/* dropdown button */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='h-12' src={logo} alt="" />
                    <i><span className='text-amber-600 text-3xl'>sport</span> photography</i>
                </Link>
            </div>
            {/* manu items */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;