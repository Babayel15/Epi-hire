import { url } from "../config/api.js"

export async function getOne(contact) {
    const reponse = await fetch(url + "contacts/" + contact, {
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
    const reponse = await fetch(url + "contacts", {
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

export async function changeOne(contact, body) {
    const reponse = await fetch(url + "contacts/" + contact, {
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

export async function deleteOne(contact) {
    const reponse = await fetch(url + "contacts/" + contact, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return reponse.json();
}