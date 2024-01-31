import { auth } from "./app/api/auth"

export default auth((req) => {

    const isLogin = !!req.auth
    const {nextUrl} = req;

    if (nextUrl.pathname === '/login') {

        return null;
        
    }

    if (!isLogin && nextUrl.pathname !='/login') return Response.redirect(new URL('/login', nextUrl))
   

})


export const config = {
    matcher: [ "/about"],
  }