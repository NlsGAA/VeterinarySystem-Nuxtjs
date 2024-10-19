export default function () {
    const isAuth = useAuthStore().authToken ? true : false;

    console.log(isAuth);

    if(!isAuth) {
       return navigateTo("/login");
    }
}