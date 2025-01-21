import { NextApiRequest, NextApiResponse } from 'next';

const products = [
    { id: 1, name: "Producto 1", price: 60 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3", price: 120 },
    { id: 4, name: "Producto 4", price: 70 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(products);
}