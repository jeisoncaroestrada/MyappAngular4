export class User {
    email: string;
    name: string;
    password: string;
    _id:string;
    
    constructor(
        email:string,
        name:string,
        password:string,
        _id?:string,
    ){
        this.email = email;
        this.name = name;
        this.password = password ;
        this._id = _id? _id : '';
    }    
}