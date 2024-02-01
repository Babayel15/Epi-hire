import { url } from "../config/api.js"

export async function getOne(entreprise) {
    const reponse = await fetch(url + "entreprises/" + entreprise, {
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
    const reponse = await fetch(url + "entreprises", {
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

export async function changeOne(entreprise, body) {
    const reponse = await fetch(url + "entreprises/" + entreprise, {
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

export async function deleteOne(entreprise) {
    const reponse = await fetch(url + "entreprises/" + entreprise, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return reponse.json();
}