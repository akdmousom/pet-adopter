'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const PostPetCommunity = ({ user }) => {
    const { name, image, email } = user;
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleCommunityData = (e) => {
        e.preventDefault();
        const event = e.target;
        const img = event.file.files[0];
        const message = event.message.value;
        const imgbb_key = 'ceccd7f28cf74921bd1fb98402d6032f';

        const formData = new FormData();
        formData.append('image', img);

        axios.post(`https://api.imgbb.com/1/upload?key=${imgbb_key}`, formData)
            .then(res => {
                const input_image = res.data.data.display_url;
                const formattedDate = formatDate(currentDate); // Format the current date
                const postData = {
                    input_image,
                    input_message: message,
                    user_name: name,
                    user_image: image,
                    user_email: email,
                    post_date: formattedDate // Include the formatted date in the post data
                };

                if (message === '' || img === '') {
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: "Please fill up all inbox field",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    axios.post('http://localhost:5000/api/v1/petCommunity', postData)
                        .then(res => {
                            if (res.statusText === 'OK') {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Community Post Successful",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                event.file.value = '';
                                event.message.value = '';
                            } else {
                                Swal.fire({
                                    position: "center",
                                    icon: "warning",
                                    title: "Something went wrong!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                        .catch(error => console.log(error, 'error'));
                }
            })
            .catch(error => console.log(error, 'error'));
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 py-10">
                <div className="card shrink-0  w-full max-w-lg mx-10 shadow-2xl bg-base-100">
                    <form onSubmit={handleCommunityData} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" name='file' className="input input-bordered input-secondary w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name='message' className="textarea textarea-secondary h-48" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#f04336] hover:bg-black text-white font-bold">Post Your Community</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostPetCommunity;
