// import { getSession } from 'next-auth/react';

export const apiConfig = {
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

export async function setHeaders(headers: Headers) {
    // const session = await getSession();
    // if (session) {
    //     const token = (session! as any).user.accessToken as string;
    //     if (token) {
    //         // headers.set('authorization', Bearer ${token});
    //     }
    // }
    // headers.set('content-type', 'application/json');
    // headers.set('Access-Control-Allow-Origin', '*');
    return headers;
}

export const apiPaths = {
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    loginUrl: '/auth/login/',
};