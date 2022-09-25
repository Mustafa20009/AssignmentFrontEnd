import { Input } from "../../Component/Input";
import { useForm } from "react-hook-form";
import Modal from "../../Component/Modal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeActiveProductReducer,
  loadingOnReducer,
} from "../../reducer/productReducer";
import { postData, updateData } from "../../Actions/productAction";

export default function ProductPopUp({ open, setOpen }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product.activeProduct);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({});
  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("price", state.price);
      setValue("description", state.description);
      setValue("inventDate", state.inventDate);
    } else {
      reset({ name: "", price: "", description: "", inventDate: "" });
    }
  }, [state]);
  const submitData = (data) => {
    reset({ name: "", price: "", description: "", inventDate: "" });
    dispatch(loadingOnReducer());
    setOpen(false);
    if (state) {
      dispatch(updateData({ id: state._id, body: data }));
    } else {
      dispatch(postData(data));
    }
    dispatch(removeActiveProductReducer());
  };
  return (
    <Modal
      activeProduct={state}
      open={open}
      setOpen={setOpen}
      title={state ? "Edit Product" : "Add Product"}
      detail={`  Enter Data In All Feild to ${
        state ? "Edit" : "Add"
      } The Product`}
    >
      <form
        onSubmit={handleSubmit((data) => {
          submitData(data);
        })}
      >
        <Input
          label="Name"
          type="text"
          {...register("name", {
            required: "Enter Name",
            minLength: {
              value: 2,
              message: "Name should be geater than 2 chaacter",
            },
          })}
          errors={errors.name}
        />
        <Input
          label="Price"
          type="text"
          {...register("price", {
            required: " Enter the Price",
            min: {
              value: 1,
              message: "Price Should be greater than 1",
            },
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/,
              message: "Please Enter Number",
            },
          })}
          errors={errors.price}
        />

        <Input
          label="Description"
          type="text"
          {...register("description", {
            required: "Enter Description",
            minLength: {
              value: 10,
              message: "Description should be geater than 10 chaacter",
            },
          })}
          errors={errors.description}
        />
        <Input
          label="Inventory Date"
          type="date"
          {...register("inventDate", {
            required: "Enter The Date",
            minLength: {
              value: 2,
              message: "Max length is 2",
            },
          })}
          errors={errors.inventDate}
        />
        <div className="flex space-x-4 mt-5 sm:mt-6">
          <button
            onClick={() => {
              setOpen(false);
              clearErrors();
              dispatch(removeActiveProductReducer());
            }}
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none    sm:text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            value="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none    sm:text-sm"
          >
            {state ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
