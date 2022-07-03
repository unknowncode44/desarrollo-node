import express, {Application} from 'express'
import indexRouter from './routes/indexRoutes'

class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config()
        this.routes()
    }

    config(): void{
        this.app.set('port', 3000);   
    }

    routes(): void {
        this.app.use(indexRouter)
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server corriendo '+ this.app.get('port'));
        })
    }
}

const server = new Server();

server.start()