import { url } from "../config/api.js"

export async function signIn(username, password) {
    var data = {
        username: username,
        password: password
    }

    const reponse = await fetch(url + "auth/signin", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return reponse.json();
}

export async function signUp(username, password) {
    var body = {
        username: username,
        password: password
    }

    const reponse = await fetch(url + "auth/signup", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    return reponse.json();
}