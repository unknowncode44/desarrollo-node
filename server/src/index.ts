import cors from 'cors';
import express, {Application} from 'express'
import morgan from 'morgan';
import pool from './database';
import indexRoutes from './routes/indexRoutes';

class Server {
    public app: Application;
 

    constructor(){
        this.app = express();
        this.config()
        this.routes()

    }

    config(): void{
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use(indexRoutes)
    }

    startDb(): void {
        pool.getConnection()
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server corriendo '+ this.app.get('port'));
        })
    }
}

const server = new Server();


server.start()
