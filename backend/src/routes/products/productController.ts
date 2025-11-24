import { Request, Response } from "@types/express";


export function listProducts(req: Request, res: Response) {
    res.send('getProductById');
}

export function getProductById(req: Request, res: Response) {
    res.send('getProductById');
}

export function deleteProduct(req: Request, res: Response) {
    res.send('getProductById');
}



export function createProduct(req: Request, res: Response) {
    res.send('getProductById');
    console.log(req.body);

}

export function updateProduct(req: Request, res: Response) {
    res.send('getProductById');
}