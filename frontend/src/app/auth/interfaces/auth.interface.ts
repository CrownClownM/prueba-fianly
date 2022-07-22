/**
 * Definicion de las interfaces necesarias para el modelo de la informacion de la peticion de usuarios de la base de datos
*/

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