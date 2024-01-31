import { auth } from "./app/api/auth"

export default auth((req) => {

    const isLogin = !!req.auth
    console.log(isLogin);
    const {nextUrl} = req;

    // console.log(req.nextUrl.pathname);

    if (nextUrl.pathname === '/login') {

        return null;
        
    }

    if (!isLogin && nextUrl.pathname !='/login') return Response.redirect(new URL('/login', nextUrl))
   
    console.log('Middle ware hit');

})


export const config = {
    matcher: [ "/about/"],
  }