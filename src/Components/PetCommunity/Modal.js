"use client"
import axios from 'axios';
import Image from "next/image";
import { LuSendHorizonal } from "react-icons/lu";
import { useEffect, useState } from "react";
const Modal = ({data,user}) => {
    console.log(user,'user data')
    console.log(data,'data data')
    const [commentData,setCommentData]=useState([])
    const id=data._id
    console.log(id,'id')
    const handleComment = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;
        const likeComment={id,user_image:user.image,user_name:user.name,comment}
        axios.post('http://localhost:5000/api/v1/likeComment',likeComment)
        .then(res=>console.log(res,'res'))
        .catch(error=>console.log(error))
        event.target.comment.value=" "
        console.log(comment);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/likeCommentGet')
        .then(res=>{
            const filterdata=res.data.filter(item=>item.id===id)
            console.log(filterdata.id,'comment')
            setCommentData(filterdata.reverse())
        })
        .catch(error=>console.log(error))
    }, []);

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

                        <form onSubmit={handleComment} className='flex'>
                            <input type="text" name="comment" placeholder="Write a comment...." className="input input-bordered input-error w-full max-w-xs" />
                            <button type="submit" name="send" className="btn hover:bg-red-400 bg-[#F04336] text-[#F04336]  ml-2 "><LuSendHorizonal className="text-white text-base" /> </button>
                        </form>

                    </div>
                    {
                        commentData.map(data=><div key={data._id} className="bg-gray-100 py-5 px-3 rounded-lg my-2">
                        <div className="flex space-x-2 ">
                        <div className="avatar">
                           <div className="w-8 rounded-full">
                             <Image width={200} height={200} src={data.user_image} alt=""/>
                           </div>
                        </div>
                            <h1 className="font-bold">{data.user_name}</h1>
                        </div>
                        <h1 className="pl-5 py-3">{data.comment}</h1>
                    </div>)
                    }
                </div>
            </dialog>

        </div>
    );
};

export default Modal;