

const AdoptHerePage = () => {
    
  const userData = async (formData) => {
    'use server'
    const rawFormData = {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        number: formData.get('number'),
        message: formData.get('message'),
    }

    // When user hit the login button you can get user information in rawFormData object
    await rawFormData
    console.log(rawFormData);

}
    return (
        <div>
            {/* <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script> */}
            <div className="hero min-h-screen bg-[#FFF5E4]">
     <div className="card shrink-0 w-full max-w-2xl lg:shadow-2xl bg-base-100">
      <form  action={userData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='user_name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" name='number' placeholder="Your Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name='user_email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type='text' name='message' className="textarea input-bordered" placeholder="Your massege"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#F04336] text-white font-bold">Send Adopt Request</button>
        </div>
      </form>
    </div>
</div>
            
        </div>
    );
};

export default AdoptHerePage;