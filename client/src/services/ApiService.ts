import { getToken, verifyToken } from "./auth";

const serverUrl = 'http://localhost:3000/';

export const handleRequest =
    function (endPoint: string, data: object): Promise<Response> {

        return fetch(`${serverUrl}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }

export const getRequest =
    function (endPoint: string): Promise<Response> | null {
        const token = getToken();
        if (!verifyToken()) {
            return null;
        }

        return fetch(`${serverUrl}${endPoint}`, {
            method: 'GET',
            headers: {
                'x-auth-token': token
            }
        })
    }