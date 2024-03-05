const EmptyDashboard = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-24'>
        <h1 className='text-2xl font-bold py-5'>Your Post is Empty ! </h1>
        <h1 className='text-lg mb-10'>Please Post Something </h1>
        <button className='btn bg-red-500 text-white font-bold hover:bg-black'>Post on Community</button>
        </div>
    );
};

export default EmptyDashboard;