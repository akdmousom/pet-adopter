"use client"
import Image from "next/image";
import img from '../../../../public/images/email.svg'
import contactImg from '../../../../public/images/contact_img.png'
import Script from "next/script";
import emailjs from "../emailJsFile/page";
import { useRef } from "react";
const Swal = require('sweetalert2')

const EmailSection = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    const target = e.target
    let name = target.user_name.value
    let email = target.user_email.value
    let subject = target.subject.value
    let message = target.message.value
    const rules = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
    // console.log(name, email, subject, message)
    if (name === '' || email === '' || subject === '' || message === '') {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "input box is empty !",
        showConfirmButton: false,
        timer: 2500
      })
    }
    else {
      emailjs.sendForm('service_so3nrs7', 'template_a94lqzf', form.current, 'GzJCnzv2qNGyYuwaT')
        .then((result) => {
          target.user_name.value = ''
          target.user_email.value = ''
          target.subject.value = ''
          target.message.value = ''
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully email send",
            showConfirmButton: false,
            timer: 2500
          })
        }, (error) => {
          console.log(error.text);
        });
    };
  }


  return (
    <div className="mx-5 lg:mx-24">

      {/* <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
      <div className="bg-[#FFE3E1] dark:bg-[#AD8155] text-3xl lg:text-4xl text-center dark:text-white font-bold py-6 px-4 my-10">Contact us with email</div>
      <div className="flex flex-col-reverse lg:flex-row py-10 px-10 lg:px-20">
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 space-y-3 flex-1 py-10">
          <input type="text" name='user_name' placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs border-black" />
          <input type="email" name='user_email' placeholder="Your E-mail" className="input input-bordered input-secondary w-full max-w-xs border-black" />
          <input type="text" name='subject' placeholder="Subject" className="input input-bordered input-secondary w-full max-w-xs border-black" />
          <textarea type='text' name='message' className="textarea textarea-secondary w-full max-w-xs border-black" placeholder="Your Massage"></textarea>
          <button className="btn btn-active bg-[#F04336] dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] hover:bg-black font-semibold text-white dark:text-black w-full max-w-xs">Send email</button>

        </form>
        <div className="flex-1">
          <Image src={img} className="p-5" alt='image of contact page' />
        </div>
      </div> */}



      {/* New Design */}

      <div className="my-8 mx-10">
        <div className="my-6 space-y-3">
          <h3 className="text-2xl font-medium">Contact Us</h3>
          <h2 className="text-3xl font-bold">Lets Talk Question.</h2>
          <p>The domestic dog is a doiated dendant of the wolf. The dog derived <br /> from an ancient, extinct wolf, and the modern grey.</p>
        </div>
        <div className="md:flex justify-between">
          {/* Right Side  */}
          <div className="md:w-1/3">
            <form className="space-y-3">
              <label className="form-control">
                <span className="label-text-alt font-medium text-base">Your Name</span>
                <input type="text" required placeholder="Your Name" className="p-1 border-2 " />
              </label>

              <label className="form-control">
                <span className="label-text-alt font-medium text-base">Your Email</span>
                <input type="text" required placeholder="Your Email" className="p-1 border-2 " />
              </label>

              <label className="form-control">
                <span className="label-text-alt font-medium text-base">Your Message</span>
                <textarea className="textarea textarea-error" placeholder="Opinion....."></textarea>
              </label>

              <button className="btn bg-[#F04336] text-white font-medium hover:bg-black">Send Now</button>

            </form>
          </div>
          {/* Left Side  */}
          <div>
            <Image width={200} height={200} src={contactImg} alt="" />
          </div>
        </div>

      </div>








    </div>
  );
};

export default EmailSection;