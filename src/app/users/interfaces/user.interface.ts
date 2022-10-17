export interface BusquedaUsers{
    total: number;
    users: User[];
}

export interface User{
    estado: boolean;
    google: boolean;
    _id: string;
    nombre: string;
    correo: string;
    img: string;
    rol: string;
}