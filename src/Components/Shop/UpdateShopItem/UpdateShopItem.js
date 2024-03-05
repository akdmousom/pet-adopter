'use client'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateShopItem = ({ item }) => {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const imgbb_key = 'ceccd7f28cf74921bd1fb98402d6032f';
        // get form value
        const rating = e.target.rating.value
        const name = e.target.name.value
        const img = e.target.image.files[0]
        const description = e.target.description.value
        const category = e.target.category.value
        const price = e.target.price.value
        const itemInfo = { name, rating, description, category, price }
        // upload image
        if (img) {
            const formData = new FormData();
            formData.append('image', img);
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbb_key}`, formData)
            itemInfo.image = res.data.data.display_url

        } else {
            itemInfo.image = item?.image
        }
        const res = await fetch(`https://pet-adopter-backend.vercel.app/api/v1/item/${item?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
        const data = await res.json()
        if (data?.acknowledged) {
            toast.success('Item Added successfully!');
            // e.target.reset();
            router.refresh()
        }

    };

    const inputStyle = "mt-1 p-2 border rounded-md w-full";

    return (
        <div className="px-9 py-5 box-border overflow-y-scroll h-screen">
            <h3 className='text-3xl font-semibold text-center uppercase py-4'>Update {item?.name}</h3>
            < form onSubmit={handleSubmit} className="px-9 box-border" >
                <div className='lg:grid grid-cols-2 gap-3 mb-3'>


                    <div className="mb-4">
                        <label htmlFor="Name" className="block font-semibold uppercase text-gray-600">
                            Name
                        </label>
                        <input type="text" defaultValue={item?.name} name="name" className={inputStyle} required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block font-semibold uppercase text-gray-600">
                            Rating
                        </label>
                        <input type="number" defaultValue={item?.rating} name="rating" className={inputStyle} required />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block font-semibold uppercase text-gray-600">
                            Price
                        </label>
                        <input type="number" defaultValue={item?.price} name="price" className={inputStyle} required />

                    </div>

                    <div className="mb-4">
                        <label className="font-semibold uppercase text-gray-600" htmlFor="Category">Item Category:</label>
                        <select name="category" className={inputStyle} required>
                            <option value=''>All Categories</option>
                            <option selected={item?.category === 'food'} value="food">Food</option>
                            <option selected={item?.category === 'equipment'} value="equipment">Equipment</option>
                            <option selected={item?.category === 'medical'} value="medical">Pet Medical</option>
                            <option selected={item?.category === 'others'} value="others">Others</option>
                        </select>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block font-semibold uppercase text-gray-600">
                            Image URL
                        </label>
                        <input type="file" name="image" className={inputStyle} />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block font-semibold uppercase text-gray-600">
                            old image
                        </label>
                        <Image className='h-16 w-16' src={item?.image} width={500} height={500} alt='medicine image' />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="Description" className="block font-semibold uppercase text-gray-600">
                        Description
                    </label>
                    <textarea defaultValue={item?.description} name="description" className={inputStyle} ></textarea>

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
}

export default UpdateShopItem
