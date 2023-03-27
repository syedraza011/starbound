import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import supabase from "../../supabase";
import { AiFillAlert } from "react-icons/ai";

const AddItem = () => {
  const [formError, setFormError] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetails] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !detail || !image) {
      setFormError("Please fill out the required fields");
      return;
    }
    console.log("item Name:", name);
    console.log("price :", price);
    console.log("Details depardate:", detail);
    console.log("image :", image);

    const { data, error } = await supabase
      .from("items")
      .insert([{ name, detail, price, image }]);
    if (error) {
      console.log(error);
      setFormError("Please fill out the required fields");
    }
    if (data) {
      console.log(data);
      alert("Your file is being added!");
      setFormError(null);
      navigate("/store");
    }
  };

  return (
    <>
      <h1>Add items page</h1>
      <form className="Form bg-zinc-200" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Enter the Item's Name"
            />
            <div className="border-red-800">
              <hr />
            </div>

            <label
              htmlFor="name"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Product Name:
            </label>
            {/* -------------------------------------- */}

            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Enter price..."
            />
            <div className="border-red-800">
              <hr />
            </div>
            <label
              htmlFor="price"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Product Price: I{" "}
            </label>
            {/* ------------------------------------------------------ */}

            <input
              type="text"
              id="details"
              value={detail}
              onChange={(e) => setDetails(e.target.value)}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Product Description..."
            />

            <div className="border-red-800">
              <hr />
            </div>
            <label
              htmlFor="details"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Product Details:
            </label>

            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Image URL"
            />
            <div className="border-red-800">
              <hr />
            </div>
            <label
              htmlFor="image"
              className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] border-red-800 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
              Image URL:
            </label>

            {/* ------------------------ */}

            <button className={styles.btnStyle} >Add Item
              <Link href="/store">Add Product</Link>{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddItem;
