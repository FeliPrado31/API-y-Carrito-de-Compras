import { NextApiRequest, NextApiResponse } from 'next';

let cart: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const product = req.body;
        cart.push(product);
        res.status(200).json(cart);
    } else if (req.method === 'GET') {
        res.status(200).json(cart);
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}