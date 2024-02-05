import Image from 'next/image';
import Link from 'next/link';
import '../../globals.css'

const page = () => {
    return (
        <div className=''>
            <div className="flex border-[#322c21]">
                <hr />
                {/* side bar */}
                <div className="w-80 min-h-screen bg-[#322c21] text-white text-lg font-semibold rounded-xl my-4">
                    <ul className="menu text-center space-y-4 my-4">
                        <li>
                            <Link href="/about">
                                Route</Link>
                        </li>
                        <li>
                            <Link href="/about">
                                Route</Link>
                        </li>
                        <li>
                            <Link href="/about">
                                Route</Link>
                        </li>
                        <li>
                            <Link href="/about">
                                Route</Link>
                        </li>
                    </ul>
                </div>
                {/*content*/}
                <div className="flex-1 p-8">
                    <p className="text-3xl font-bold">Dashboard</p>
                    <div className='flex gap-6 py-8'>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Title</h2>
                                <p>Description Description Description</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Title</h2>
                                <p>Description Description Description</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Title</h2>
                                <p>Description Description Description</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Title</h2>
                                <p>Description Description Description</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-6 py-8'>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><Image src="" alt="Image" width={300} height={300} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Title
                                </h2>
                                <p>Description Description Description</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><Image src="" alt="Image" width={300} height={300} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Title
                                </h2>
                                <p>Description Description Description</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><Image src="" alt="Image" width={300} height={300} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Title
                                </h2>
                                <p>Description Description Description</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-6 py-8'>
                        <div className="overflow-x-auto card bg-base-100 shadow-xl w-3/4">
                            <table className="table table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Title</th>
                                        <th>Title</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Description Description Description</th>
                                        <td>Description Description Description</td>
                                        <td>Description Description Description</td>
                                        <td><Image src="" alt="Image" width={300} height={300} className="rounded-full h-16 w-16" /></td>
                                        <td>Description Description Description</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>
                        <div className='card bg-base-100 shadow-xl w-1/4 px-6'>
                            <h3>Title Title Title Title</h3>
                            <p>Description Description Description</p>
                            <br />
                            <h3>Title Title Title Title</h3>
                            <p>Description Description Description</p>
                            <br />
                            <h3>Title Title Title Title</h3>
                            <p>Description Description Description</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;