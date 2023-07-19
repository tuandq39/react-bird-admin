export const userColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "category",
    headerName: "Category",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.category}`}>
          {params.row.category}
        </div>
      );
    },
  },
];

//temporary data
