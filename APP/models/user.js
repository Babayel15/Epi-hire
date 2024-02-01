import { url } from "../config/api.js"

export async function getOne(user) {
    const reponse = await fetch(url + "users/" + user, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return reponse.json();
}

export async function getAll() {
    const reponse = await fetch(url + "users", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return reponse.json();
}

export async function postOne(body) {
    const reponse = await fetch(url + "auth/signin", {
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

export async function changeOne(user, body) {
    const reponse = await fetch(url + "users/" + user, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    return reponse.json();
}

export async function deleteOne(user) {
    const reponse = await fetch(url + "users/" + user, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin"
    });

    return reponse.json();
}