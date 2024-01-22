
const Register = () => {
    return (
        <div className="hero min-h-screen  bg-[#FFF5E4]">
        <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-[#FFE3E1]">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-lg ">Name</span>
              </label>
              <input type="text" placeholder="You Name" className="input input-bordered border-red-500" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-lg ">Profile Picture</span>
              </label>
              <input type="file" className="input input-bordered border-red-500" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-lg ">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered border-red-500" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered border-red-500" required />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#F04336] text-white font-bold">Register</button>
            </div>
            <p className="text-lg">Have an account? <span className="underline text-red-500 font-bold">Login</span></p>
          </form>
        </div>
    </div>
    );
};

export default Register;