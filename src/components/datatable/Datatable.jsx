import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProductById, getAllProducts } from "../../service/firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await deleteProductById("product",id)
      setData(data.filter((item) => item.id !== id));
    }catch(err) {
      console.log(err);
    }
  };

  const getData = async () =>{
    try {
      const productsData = await getAllProducts("product");
      setData(productsData);
    }catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  },[])


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/product/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
