import CreateProduct from "../components/CreateProduct";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Modal from "../components/Modal";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";
import { IProduct } from "../models";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContex";

function ProductPage() {
  const { loading, products, error, addProduct } = useProducts();

  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Message error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        onClick={open}
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2lg px-4 py-2"
      >
        +
      </button>
    </div>
  );
}

export default ProductPage;
