export function Decode(token) {
    if(!token) return {};
    try {
        const user = JSON.parse(atob(token.split(".")[1]));
        return user;
    } catch (e) {
        console.error("Invalid JSON token: " + token, e);
    }

    return {};
}