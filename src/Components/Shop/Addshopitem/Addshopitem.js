'use client'

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addshopitem = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const rating = e.target.rating.value
        const name = e.target.name.value
        const image = e.target.image.value
        const description = e.target.description.value
        const category = e.target.category.value
        const price = e.target.price.value

        const itemInfo = { name, rating, image, description, category, price }

        axios.post('https://pet-adopter-backend.vercel.app/api/v1/shopitems', itemInfo)
            .then(res => {
                toast.success('Item Added successfully!');
                e.target.reset();
            })
    };

    const inputStyle = "mt-1 p-2 border rounded-md w-full";

    return (
        <div className="my-5">
            < form onSubmit={handleSubmit} className="w-7/12 mx-auto p-6 bg-white rounded-md border-2 border-black shadow-md" >

                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                        Image URL
                    </label>
                    <input type="text" name="image" className={inputStyle} required />

                </div>

                <div className="mb-4">
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input type="text" name="name" className={inputStyle} required />

                </div>

                <div className="mb-4">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-600">
                        Rating
                    </label>
                    <input type="text" name="rating" className={inputStyle} required />

                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                        Price
                    </label>
                    <input type="text" name="price" className={inputStyle} required />

                </div>

                <div className="mb-4">
                    <label htmlFor="Category">Item Category:</label>
                    <select name="category" className={inputStyle} required>
                        <option value="">All Categories</option>
                        <option value="food">Food</option>
                        <option value="equipment">Equipment</option>
                        <option value="medical">Pet Medical</option>
                        <option value="others">Others</option>
                    </select>

                </div>



                <div className="mb-4">
                    <label htmlFor="Description" className="block text-sm font-medium text-gray-600">
                        Description
                    </label>
                    <textarea name="description" className={inputStyle} ></textarea>

                </div>

                <button type="submit" className="px-4 py-2 rounded-md border-none text-white hover:bg-black bg-[#FA524F] focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Submit
                </button>

            </ form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </div>
    );
};

export default Addshopitem;