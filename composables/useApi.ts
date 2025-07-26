import type { UseFetchOptions } from "#app";

export function useApi<T>(endpoint: string, options: UseFetchOptions<T> = {}) {
    let headers: any = {};

    const csrfToken = useCookie("XSRF-TOKEN");
    const bearerToken = useCookie("JWT-TOKEN");

    if(csrfToken) {
        headers["X-XSRF-TOKEN"] = csrfToken.value as string;
    }

    if(bearerToken) {
        headers["Authorization"] = "Bearer " + bearerToken.value;
    }

    return useFetch("http://localhost:8000/api/" + endpoint, {
        credentials: "include",
        watch: false,
        ...options,
        headers: {
            ...headers,
            ...options?.headers
        }
    }).catch((error) => {
        console.log(error);
    });
}