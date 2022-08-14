import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch('http://localhost:8080/products', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        navigate.push("/");
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <TextField className="input" value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="Nama Produk" variant="outlined" placeholder="Nama Produk" />
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label">Price</label>
                        <TextField className="input" value={price} onChange={(e) => setPrice(e.target.value)} id="outlined-basic" label="Harga" variant="outlined" type="number" placeholder="Harga" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <Button variant="contained" onClick={() => { alert('Produk telah ditambahkan'); }} >Save</Button>
                    </div>
                </div>

            </form>
        </div>
    )
}
export default AddProduct