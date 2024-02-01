import { url } from "../config/api.js"

export async function getOne(jobadvert) {
    const reponse = await fetch(url + "jobadverts/" + jobadvert, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
    });

    return reponse.json();
}

export async function getAll() {
    const reponse = await fetch(url + "jobadverts", {
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

export async function changeOne(jobadvert, body) {
    const reponse = await fetch(url + "jobadverts/" + jobadvert, {
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

export async function deleteOne(jobadvert) {
    const reponse = await fetch(url + "jobadverts/" + jobadvert, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return reponse.json();
}