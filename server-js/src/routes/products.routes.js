import {Router} from 'express';
import { methods } from '../controller/product.controller.js';


const productRouter = Router();

productRouter.get('/', methods.getProducts)

productRouter.post('/', methods.addProducts)



export default productRouter