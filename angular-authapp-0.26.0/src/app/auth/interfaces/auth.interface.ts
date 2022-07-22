export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    token?: string;
    msg?: string;
    lastName: string;
    dateBirth?: string;
    gender?: string;
}

export interface Usuario {
    uid: string;
    name: string;
    lastName: string;
    email: string;
    dateBirth?: string;
    gender?: string;

}