"use client"

const PostPetCommunity = () => {
    const handleCommunityData=(e)=>{
        e.preventDefault();
        const event=e.target
        const img=event.file.value;
        const message=event.message.value
        console.log(img,message)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
   <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleCommunityData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" name='file' className="input input-bordered input-secondary" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name='message' className="textarea textarea-secondary h-48" placeholder="Your Message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#f04336] text-white font-bold">Post Your Community</button>
        </div>
      </form>
    </div>
</div>
        </div>
    );
};

export default PostPetCommunity;