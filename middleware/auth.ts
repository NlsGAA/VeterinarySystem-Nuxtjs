export default function () {
    const isAuth = useAuthStore().isAuth;

    if(!isAuth) {
       return navigateTo("/login");
    }
}