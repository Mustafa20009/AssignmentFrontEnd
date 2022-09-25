import { useDispatch } from "react-redux";
import { activeProductReducer } from "../../reducer/productReducer";

export default function Table({ header, setOpen, data }) {
  const dispatch = useDispatch();
  return (
    <div className="mt-8 flex flex-col">
      <div className=" -my-2  overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle  md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {header?.map((v, k) => (
                    <th
                      key={k}
                      scope="col"
                      className="py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-4"
                    >
                      {v}
                    </th>
                  ))}
                  <th key="unique"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data?.map((v) => (
                  <tr key={v._id}>
                    <td className="whitespace-nowrap py-4  pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {v?.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {v?.description}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {v?.price}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {v?.inventDate}
                    </td>
                    <td
                      onClick={() => {
                        console.log(v, "jjj");
                        setOpen(true);
                        dispatch(activeProductReducer(v));
                      }}
                      className="flex whitespace-nowrap  text-center py-4 pl-3 pr-4 space-x-4 text-sm font-medium sm:pr-6"
                    >
                      <div className="text-indigo-600 hover:text-indigo-900  text-center w-full ">
                        Edit
                      </div>
                      {/* <div className="text-red-600 hover:text-indigo-900  text-center w-full ">
                        Delete
                      </div> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {data.length === 0 && (
              <p className="text-center py-5">No Data Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
