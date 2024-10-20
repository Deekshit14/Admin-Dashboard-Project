import { useState } from "react";
import "./products.scss"
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";


const columns: GridColDef[] = [
    { 
      field: "id", 
      headerName: "ID", 
      width: 70
    },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 110,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 120,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 130,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 120,
      type: "boolean",
    },
];
  


const Products = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <div className = "products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Products</button>
            </div>

            <DataTable slug = "products" columns={columns} rows={products}/>
            { open && <Add slug = "product" columns = {columns} setOpen = {setOpen} /> }
        </div>
     );
}
 
export default Products;