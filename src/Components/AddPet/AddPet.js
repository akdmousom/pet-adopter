
"use client"


const AddPet = () => {




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.petAge.value)
        console.log(e.target.petName.value)
        console.log(e.target.petLocation.value)
        console.log(e.target.petCategory.value)

    };

    const inputStyle = "mt-1 p-2 border rounded-md w-full";
    return (
        <div>

            < form onSubmit={handleSubmit} className="w-7/12 mx-auto p-6 bg-white rounded-md border-2 border-black shadow-md" >

                <div className="mb-4">
                    <label htmlFor="petImage" className="block text-sm font-medium text-gray-600">
                        Pet Image
                    </label>
                    <input type="file" name="petImage" className={inputStyle} required />

                </div>

                <div className="mb-4">
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-600">
                        Pet Name
                    </label>
                    <input type="text" name="petName" className={inputStyle} required />

                </div>

                <div className="mb-4">
                    <label htmlFor="petAge" className="block text-sm font-medium text-gray-600">
                        Pet Age
                    </label>
                    <input type="text" name="petAge" className={inputStyle} required />

                </div>

                <div className="mb-4">
                    <label htmlFor="petCategory">Pet Category:</label>
                    <select name="petCategory" className={inputStyle} required>
                        <option value="">All Categories</option>
                        <option value="dog">dog</option>
                        <option value="cat">cat</option>
                        <option value="rabbit">rabbit</option>
                        <option value="bird">bird</option>
                    </select>

                </div>

                <div className="mb-4">
                    <label htmlFor="petLocation" className="block text-sm font-medium text-gray-600">
                        Pet Location
                    </label>
                    <select name="petLocation" className={inputStyle} required>
                        <option value="">Most Popular City</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="khulna">Khulna</option>
                        <option value="rajshahi">Rajshahi</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Narayanganj">Narayanganj</option>

                    </select>

                </div>

                <div className="mb-4">
                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-600">
                        Short Description
                    </label>
                    <textarea name="shortDescription" className={inputStyle} required></textarea>

                </div>

                <div className="mb-4">
                    <label htmlFor="longDescription" className="block text-sm font-medium text-gray-600">
                        Long Description
                    </label>
                    <textarea name="longDescription" className={inputStyle} required></textarea>

                </div>

                <button type="submit" className="px-4 py-2 rounded-md border-none text-white hover:bg-[#f28583] bg-[#FA524F] focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Submit
                </button>

            </ form>

        </div>
    );
};

export default AddPet;