import { Router } from "express";


class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/usuarios', (req, res)=>{
            res.send({
                ok: true,
                listaUsuario: '[lista, de, usuarios]'
            }
            )
        });

        this.router.post('/usuario', (req, res)=>{
            const {nombre, apellido, mail} = req.body
            res.send({
                ok: true,
            }
            )
        });

        this.router.put('/usuario/:id', (req, res)=> {
            console.log(req.params);
            res.send({
                ok:true
            })
            
        } )
    }
}

const indexRouter = new IndexRoutes();

export default indexRouter.router