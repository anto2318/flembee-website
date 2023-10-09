import jwt_decode from "jwt-decode";

export const storage = {
    set: (name: string, content: any) => {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },
    get: (name: string) => {
        if (!name) return;
        return window.localStorage.getItem(name);
    },
    remove: (name: string) => {
        if (!name) return;
        return window.localStorage.removeItem(name);
    },
    clear: () => {
        return window.localStorage.clear();
    },
};

export const getStorage = {
    login: () => {
        const loginJson = storage.get('login');
        return loginJson ? JSON.parse(loginJson) : null;
    },
    user: () => {
        const userJson = storage.get('user');
        const decodedToken: { token: string } | null = userJson
            ? jwt_decode(userJson)
            : null;
        return decodedToken ? decodedToken.token : '';
    },
    token: () => {
        const userJson = storage.get('user');
        const decodedToken: { token: string } | null = userJson
            ? jwt_decode(userJson)
            : null;
        return decodedToken ? decodedToken.token : '';
    },
};
