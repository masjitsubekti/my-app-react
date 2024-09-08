import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import { itemService } from "../../services/item.service";
import Button from "../../components/Elements/Button";
import Input from "../../components/Elements/Input/Input";
import { Link } from "react-router-dom";

const ItemsPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    itemService()
      .retrieve({
        count: 100,
        page: 1,
      })
      .then((res) => {
        console.log(res.data.data);
        setItems(res.data != null ? res.data.data : []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (x) => {
    navigate(`/user/edit/${x.id}`);
  };

  const handleDelete = (x) => {
    let text = `Apakah Anda yakin menghapus data [${x.nama}] ?`;
    if (confirm(text) == true) {
      itemService()
        .deleted(x.id)
        .then((res) => {
          getItems();
        });
    }
  };

  function handleSearch(e) {
    if (e.keyCode === 13) {
      e.preventDefault(); // Ensure it is only this code that runs
      console.log(e.target.search.value);
    }
  }

  return (
    <div>
      <DefaultLayout>
        <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white mb-3">
          Data User
        </h1>

        <div className="flex justify-center">
          <div className="w-4/6 flex flex-wrap">
            <Link to="/user/add">
              <Button classname="h-9 bg-blue-600">Tambah</Button>
            </Link>
          </div>
          <div className="w-4/6 text-right">
            <input
              id="search"
              name="search"
              type="text"
              className="border rounded px-4 py-1"
              placeholder="Cari <Enter>"
              onKeyUp={(e) => handleSearch(e)}
            />
          </div>
        </div>

        <div class="relative overflow-x-auto mt-4">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-center"
                  style={{ width: "3%" }}
                >
                  No.
                </th>
                <th scope="col" class="px-6 py-3" style={{ width: "10%" }}>
                  Kode
                </th>
                <th scope="col" class="px-6 py-3" style={{ width: "20%" }}>
                  Nama
                </th>
                <th scope="col" class="px-6 py-3" style={{ width: "10%" }}>
                  Harga
                </th>
                <th scope="col" class="px-6 py-3" style={{ width: "10%" }}>
                  Keterangan
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center"
                  style={{ width: "10%" }}
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((x, i) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={i}
                  >
                    <td
                      scope="row"
                      class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white text-center"
                    >
                      {i + 1}.
                    </td>
                    <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      {x.kode}
                    </td>
                    <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      {x.nama}
                    </td>
                    <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      {x.harga}
                    </td>
                    <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      {x.keterangan}
                    </td>
                    <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white text-center">
                      <Button
                        classname="bg-orange-400 mr-1"
                        onClick={() => handleEdit(x)}
                      >
                        Edit
                      </Button>
                      <Button
                        classname="bg-red-500"
                        onClick={() => handleDelete(x)}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default ItemsPage;
