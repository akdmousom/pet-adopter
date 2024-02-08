"use client"

// import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";

const Modal = () => {
   
    
    const handleComment = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;
        event.target.comment.value=" "
        console.log(comment);
        
        
    }
    const allcomments=[
        {comments:'lokman hakim shawon'},
        {comments:'lokman hakim shawon'},
        {comments:'lokman hakim shawon'},
        {comments:'lokman hakim shawon'},
        {comments:'lokman hakim shawon'},
        {comments:'lokman hakim shawon'},
        {comments:'lokman hakim shawon'},
        {comments:'lokman hakim shawon'},
]

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
                    {
                        allcomments.map(data=><div key={data.comments} className="bg-gray-100 py-5 px-3 rounded-lg my-2">
                        <div className="flex space-x-2 ">
                        <div className="avatar">
                           <div className="w-8 rounded-full">
                             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                           </div>
                        </div>
                            <h1 className="font-bold">commenter Name</h1>
                        </div>
                        <h1 className="pl-5 py-3">{data.comments}</h1>
                    </div>)
                    }
                </div>
            </dialog>

        </div>
    );
};

export default Modal;