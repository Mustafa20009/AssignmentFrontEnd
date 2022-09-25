import React, { useState, useEffect } from "react";
import ProductPopUp from "../../Templates/ProductPopUp";
import Table from "../../Component/Table/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Actions/productAction";
import LoadingImg from "../../Assets/loading.gif";
function Product() {
  const state = useSelector((state) => state.product.data);
  const loading = useSelector((state) => state.product.loading);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(""));
  }, []);

  useEffect(() => {
    setData(state);
  }, [state]);

  return (
    <>
      {loading && (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
          <img
            alt=""
            src={LoadingImg}
            className=" relative top-[45%] left-[45%] h-20 w-20"
          />
        </div>
      )}
      <ProductPopUp open={open} setOpen={setOpen} />{" "}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="w-full flex item-end justify-end">
          <div className="relative lg:w-[20%] md:w-[40%] sm:w-[70%] w-full my-5">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="block p-3 pl-3  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  focus:outline-none "
              placeholder="Search the Product"
            />
            <button
              className="text-white absolute right-2.5 bottom-1.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-1.5  "
              onClick={() => {
                console.log("click");
                dispatch(fetchData(search));
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Products</h1>
            <p className="md:mt-2 mt-1 text-sm text-gray-700">
              A list of all the Product including their name, Description, Price
              and Inventory Date.{" "}
            </p>
          </div>
          <div className="md:mt-0 mt-5">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Product
            </button>
          </div>
        </div>
        <div></div>
        <Table
          data={data}
          setOpen={setOpen}
          header={["Name", "Description", "Price", "Inverntory Date"]}
        />
      </div>
    </>
  );
}
export default Product;
