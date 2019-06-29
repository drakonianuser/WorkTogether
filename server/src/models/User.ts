class user{
    public idusuario:any;
    public nombre: String;
    public apellido: String;
    public correo: String; 
    public contraseña: String;
    public tipousuario: String;

    constructor(idusuario:any ,nombre: String, apellido: String, correo: String, contraseña: String) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
        this.tipousuario = "usuario";
    }
}

export default user;