import Image from "next/image";
import Modal from "./Modal";

const Blogs = () => {

    return (
        <div className="max-w-[1366px] mx-auto my-10 p-5">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">

            {/* Blog Card 1 */}
            <div className="card  bg-base-100 shadow-xl">
                {/* Avatar  */}
                <div className="p-2">
                    <div className="flex">
                        <div className="avatar mx-3">
                            <div className="w-12 rounded-full">
                                <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                        </div>
                        {/* Name & Time  */}
                        <div>
                            <h3 className="text-base">Devil King</h3>
                            <p>3hr ago</p>
                        </div>
                    </div>
                    {/* Description  */}
                    <div className="mx-4 my-3">
                        <h3 >Hello Everyone This is my pet.</h3>
                    </div>
                </div>
                <figure><Image width={400} height={400} src="https://i.ibb.co/8nZpQhF/pet6.jpg" alt="Shoes" /></figure>
                <div className="p-5 space-y-5">

                    {/* Like & Comment  */}
                    <div className="flex justify-between">
                        <p className="font-medium">2k Like</p>
                        <p className="font-medium">10 comment</p>
                    </div>

                    <div className="card-actions  justify-around">
                        <button className="btn btn-sm badge-outline">Like</button>

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <Modal/>
                        </div>
                    </div>
                   
                </div>
            </div>
            {/* Blog Card 2 */}
            <div className="card  bg-base-100 shadow-xl">
                {/* Avatar  */}
                <div className="p-2">
                    <div className="flex">
                        <div className="avatar mx-3">
                            <div className="w-12 rounded-full">
                                <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                        </div>
                        {/* Name & Time  */}
                        <div>
                            <h3 className="text-base">Devil King</h3>
                            <p>3hr ago</p>
                        </div>
                    </div>
                    {/* Description  */}
                    <div className="mx-4 my-3">
                        <h3 >Hello Everyone This is my pet.</h3>
                    </div>
                </div>
                <figure><Image width={400} height={400} src="https://i.ibb.co/8nZpQhF/pet6.jpg" alt="Shoes" /></figure>
                <div className="p-5 space-y-5">

                    {/* Like & Comment  */}
                    <div className="flex justify-between">
                        <p className="font-medium">2k Like</p>
                        <p className="font-medium">10 comment</p>
                    </div>

                    <div className="card-actions  justify-around">
                        <button className="btn btn-sm badge-outline">Like</button>

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <Modal/>
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* Blog Card 3 */}
            <div className="card  bg-base-100 shadow-xl">
                {/* Avatar  */}
                <div className="p-2">
                    <div className="flex">
                        <div className="avatar mx-3">
                            <div className="w-12 rounded-full">
                                <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                        </div>
                        {/* Name & Time  */}
                        <div>
                            <h3 className="text-base">Devil King</h3>
                            <p>3hr ago</p>
                        </div>
                    </div>
                    {/* Description  */}
                    <div className="mx-4 my-3">
                        <h3 >Hello Everyone This is my pet.</h3>
                    </div>
                </div>
                <figure><Image width={400} height={400} src="https://i.ibb.co/8nZpQhF/pet6.jpg" alt="Shoes" /></figure>
                <div className="p-5 space-y-5">

                    {/* Like & Comment  */}
                    <div className="flex justify-between">
                        <p className="font-medium">2k Like</p>
                        <p className="font-medium">10 comment</p>
                    </div>

                    <div className="card-actions  justify-around">
                        <button className="btn btn-sm badge-outline">Like</button>

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <Modal/>
                        </div>
                    </div>
                   
                </div>
            </div>
            {/* Blog Card 4 */}
            <div className="card  bg-base-100 shadow-xl">
                {/* Avatar  */}
                <div className="p-2">
                    <div className="flex">
                        <div className="avatar mx-3">
                            <div className="w-12 rounded-full">
                                <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                        </div>
                        {/* Name & Time  */}
                        <div>
                            <h3 className="text-base">Devil King</h3>
                            <p>3hr ago</p>
                        </div>
                    </div>
                    {/* Description  */}
                    <div className="mx-4 my-3">
                        <h3 >Hello Everyone This is my pet.</h3>
                    </div>
                </div>
                <figure><Image width={400} height={400} src="https://i.ibb.co/8nZpQhF/pet6.jpg" alt="Shoes" /></figure>
                <div className="p-5 space-y-5">

                    {/* Like & Comment  */}
                    <div className="flex justify-between">
                        <p className="font-medium">2k Like</p>
                        <p className="font-medium">10 comment</p>
                    </div>

                    <div className="card-actions  justify-around">
                        <button className="btn btn-sm badge-outline">Like</button>

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <Modal/>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>


    </div>
    );
};

export default Blogs;