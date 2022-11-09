// import React, { useContext } from 'react';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
// import Logimg from '../../../images/ima/login.png'
// import { AuthContext } from '../../Context/AuthProvider';
// const Login = () => {
//     const { signin } = useContext(AuthContext)
//     const handleLogin = (e) => {
//         e.preventDefault()
//         const form = e.target
//         const email = form.email.value;
//         const password = form.password.value;
//         // console.log(email, password)

//         signin(email, password)
//             .then(result => {
//                 const user = result.user
//                 // navigate(from, { replace: true });
//                 form.reset()
//                 toast.success('Login Success!')
//             })
//             .catch(error => toast.error(error.message))
// }
// return (
//     <div className="hero w-full my-20">
//         <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
//             <div className="text-center lg:text-left">
//                 <img className='w-3/4' src={Logimg} alt="" />
//             </div>
//             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
//                 <h1 className="text-5xl text-center font-bold">Login</h1>
//                 <form onSubmit={handleLogin} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" name='email' placeholder="Your Email" className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" name='password' placeholder="*******" className="input input-bordered" />
//                     </div>
//                     <div className="form-control mt-6">
//                         <input className="btn btn-primary" type="submit" value="Login" />
//                     </div>
//                 </form>
//                 <p className='text-center'>Open an account if you don't have one ? <Link className='text-orange-600 font-bold' to="/signup">SignUp</Link> </p>
//             </div>
//         </div>
//     </div>
// );
// };

// export default Login;