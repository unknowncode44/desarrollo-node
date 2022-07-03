import { Router } from "express";

class IndexClientes {
    public router: Router = Router()

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', (req,res) => res.send('Hola Mundo'));
    }
}

const clientsRoutes = new IndexClientes();
export default clientsRoutes.router;