import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import { itemService } from "../../services/item.service";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/Input";
import TextareaForm from "../../components/Elements/Textarea";

const FormItemPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({
    id : null,
    kode: '',
    nama: '',
    harga: 0,
    keterangan: '',
  });

  useEffect(() => {
    if (id) {
      getById();
    }
  }, []);

  const onTodoChange = (e) => {
    const { name, value } = e.target;
    setItem((ev) => ({
      ...ev,
      [name]: value,
    }));
  };

  const getById = async () => {
    await itemService()
      .retrieveById(id)
      .then((res) => {
        if (res.data) {
          setItem(res.data.data);
        }
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    let editedItem = {
      id: e.target.id.value || null,
      kode: e.target.kode.value,
      nama: e.target.nama.value,
      harga: e.target.harga.value,
      keterangan: e.target.keterangan.value,
    };

    itemService()
      .save(editedItem)
      .then((res) => {
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <DefaultLayout>
        {item.kode}
        {item.nama}
        {item.keterangan}
        <div className="flex justify-center ">
          <div className="w-full max-w-xl border rounded border-stroke p-6">
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white mb-3">
              Form Item
            </h1>
            <form onSubmit={handleSave}>
              <InputForm
                label=""
                type="text"
                name="id"
                value={item.id || ''}
                onChange={(e) => onTodoChange(e)}
              />

              <InputForm
                label="Kode"
                type="text"
                placeholder="Nama"
                name="kode"
                value={item.kode || ''}
                onChange={(e) => onTodoChange(e)}
              />

              <InputForm
                label="Nama"
                type="text"
                placeholder="Nama"
                name="nama"
                value={item.nama || ''}
                onChange={(e) => onTodoChange(e)}
              />

              <InputForm
                label="Harga"
                type="number"
                placeholder="Harga"
                name="harga"
                value={item.harga || ''}
                onChange={(e) => onTodoChange(e)}
              />

              <TextareaForm
                label="Keterangan"
                placeholder="Keterangan"
                name="keterangan"
                rows="2"
                values={item.keterangan || ''}
                onChange={(e) => onTodoChange(e)}
                required
              />

              <div className="text-right">
                <Button
                  classname="bg-gray-400 h-9 mr-2"
                  type="button"
                  onClick={() => navigate("/user")}
                >
                  Batal
                </Button>
                <Button classname="bg-blue-600 h-9" type="submit">
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default FormItemPage;
