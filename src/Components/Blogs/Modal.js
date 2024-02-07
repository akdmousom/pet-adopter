"use client"

import { LuSendHorizonal } from "react-icons/lu";

const Modal = () => {

    
    const handleComment = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;
        event.target.comment.value=" "
        console.log(comment);


    }

    return (
        <div>
            <button className="btn btn-sm badge-outline" onClick={() => document.getElementById('my_modal_3').showModal()}>Comment</button>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="text-center p-4 lg:p-8 md:p-8">

                        <form onSubmit={handleComment} >
                            <input type="text" name="comment" placeholder="Write a comment...." className="input input-bordered input-error w-full max-w-xs" />
                            <button type="submit" name="send" className="btn hover:bg-red-400 bg-[#F04336] text-[#F04336] ml-3 mt-4"><LuSendHorizonal className="text-white text-base" /> </button>
                        </form>

                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Modal;