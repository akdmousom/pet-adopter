const { auth } = require("@/app/api/auth")

const sessionUser = async()=>{
    const session = await auth();
    return session;
}

export default sessionUser