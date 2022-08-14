import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setProducts(data);
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    }

    return (

        <div>
            <Button variant="contained" href="/add">Add Item</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="right">{product.title}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">
                                    {/* <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link> */}
                                    <Button variant="contained" href={`/edit/${product.id}`}>Edit</Button>
                                    <Button onClick={() => deleteProduct(product.id)} className="button is-small is-denger">Delete</Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default ProductList