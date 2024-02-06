export const getSinglePet = async (id) => {
    const res = await fetch(
        `https://pet-adopter-backend.vercel.app/api/v1/pet/${id}`,
        {
            cache: "no-store",
        }
    );
    return res.json();
};