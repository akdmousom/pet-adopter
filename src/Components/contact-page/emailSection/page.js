import Image from "next/image";
import img from '../../../../public/images/email.svg'
import Script from "next/script";
import emailjs from "../emailJsFile/page";
import { useRef } from "react";

const EmailSection = () => {
  const form=useRef()
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_so3nrs7', 'template_a94lqzf', form.current, 'GzJCnzv2qNGyYuwaT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };  
    return (
        <div className="md:mx-12 lg:mx-24 lg:mt-10 mx-auto">
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
        
              <div className="bg-[#FFE3E1] py-3 text-center text-xl font-bold mb-2 mt-8 my-10">Contact us with e-mail</div>
              <div className="bg-[#FFE3E1] flex flex-col-reverse lg:flex-row py-10 px-20">
                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 space-y-3 flex-1 py-10 ">
                <input type="text" name='user_name' placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="email" name='user_email' placeholder="Your E-mail" className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="text" name='subject' placeholder="Subject" className="input input-bordered input-secondary w-full max-w-xs" />
                <textarea type='text' name='message' className="textarea textarea-secondary w-full max-w-xs" placeholder="Your Massage"></textarea>
                <button className="btn btn-active bg-[#F04336] text-white font-bold w-full max-w-xs">Send email</button>

                </form>
                <div className="flex-1">
                    <Image src={img} className="p-5"/>
                </div>
              </div>            
        </div>
    );
};

export default EmailSection;