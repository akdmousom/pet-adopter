'use client'
import { useRef } from 'react';
import  Swal  from 'sweetalert2';



const AdoptHerePage = () => {
    const form=useRef()
    
    const handlesubmit = (e) => {
      e.preventDefault();
      const target=e.target
      let name=target.user_name.value
      let email=target.user_email.value
      let number=target.number.value
      let message=target.message.value
      const userdata={name,email,number,message}
     
      console.log(name,email,number,message)
     if(name==='' || email==='' || message==='' || message===''){
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "input box is empty !",
        showConfirmButton: false,
        timer: 2500
      })
     }
     else{
          const res=fetch('https://pet-adopter-backend.vercel.app/api/v1/adoptData',{
            method:'POST',
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(userdata)
          })
          target.user_name.value=''
          target.user_email.value=''
          target.number.value=''
          target.message.value=''
            // console.log(result.text);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Send Adopt Request Successful",
              showConfirmButton: false,
              timer: 2500
            })
        
    };
     }
    return (
        <div>
            {/* <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script> */}
            <div className="hero min-h-screen bg-[#FFF5E4]">
     <div className="card shrink-0 w-full max-w-2xl lg:shadow-2xl bg-base-100">
      <form ref={form} onSubmit={handlesubmit} className="card-body">
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