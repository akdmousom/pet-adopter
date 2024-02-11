import { auth } from "@/app/api/auth"

export default auth((req) => {
  // req.auth
  const isLogin = !!req.auth;
  const {nextUrl}=req;

  if (nextUrl.pathname == '/api/auth/signin') {
    return null
  }

  if (isLogin && nextUrl.pathname == "/api/auth/signin"){
    return Response.redirect(new URL('/'),nextUrl);
  }



  if (!isLogin && nextUrl.pathname != "/api/auth/signin"){
    return Response.redirect(new URL(`/api/auth/signin?callbackUrl=${nextUrl.pathname}`, nextUrl));
  }

 



})

export const config = {
  matcher: ["/pet-listings"],
}