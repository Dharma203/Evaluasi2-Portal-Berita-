export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/news/:path*"], // hanya proteksi /news
};
