import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logimg from '../../../images/ima/login.png'
import Google from  '../../../images/ima/gog.png'
import GitHub from  '../../../images/ima/github.png'
import { AuthContext } from '../../Context/AuthProvider';
import  toast from 'react-hot-toast';
const Signup = () => {
const {signup, signinGoogle, profileUpdate, signinGithub} =useContext(AuthContext)
    // Signup handale

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email, password)
        signup(email, password)

        .then(result => {
          const user = result.user
          profileUpdate(name)
     
        //   navigate(from, { replace: true })
          form.reset()
        //   console.log(user)
          toast.success('Login Success!')
        })
        
          .catch(error => toast.error(error.message))
        
    }
        // google registion
  const handleSignInGoogle = () => {
    signinGoogle()
      .then(result => {
        const user = result.user;
        toast.success('Login Success!')
        // console.log(user)
      })
      .catch(error => toast.error(error.message))
  }

  // github register
  const handleSignInGitHub = () => {
    signinGithub()
      .then((result) => {
        const user = result.user;
        toast.success('Login Success!')
        console.log(user)
     
      })
      .catch(error => toast.error(error.message))
  }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={Logimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="********" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center'>All ready have a account ? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    <div className='flex justify-center gap-4 items-center mt-4'>
                        <div >
                            <Link onClick={handleSignInGoogle} className='flex justify-center gap-2 items-center'> <span >
                                <img src={Google} className='h-8 mx-2' alt="" />
                                </span> Google</Link>
                        </div>
                        <div>
                            <Link onClick={handleSignInGitHub} className='flex justify-center gap-2 items-center'> <span>
                                <img src={GitHub} className='h-8 mx-2' alt="" />
                                </span> GitHub</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;