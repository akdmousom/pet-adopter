import Image from "next/image";
import img from '../../../../public/images/email.webp'
const EmailSection = () => {
    return (
        <div className="mx-24">
              <div className="bg-[#FFE3E1] py-3 text-center text-xl font-bold  my-10">Contact us with e-mail</div>
              <div className="bg-[#FFE3E1] flex flex-row py-10">
                <div className="grid grid-cols-1 space-y-5 flex-1 py-10 px-16">
                <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="text" placeholder="Your E-mail" className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered input-secondary w-full max-w-xs" />
                <textarea className="textarea textarea-secondary w-full max-w-xs" placeholder="Bio"></textarea>
                <button className="btn btn-active bg-[#F04336] text-white font-bold w-full max-w-xs">Send email</button>

                </div>
                <div className="flex-1">
                    <Image src={img} className="p-5"/>
                </div>
              </div>            
        </div>
    );
};

export default EmailSection;