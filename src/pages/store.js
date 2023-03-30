import react from "react";
import Link from "next/link";
import supabase from "../../supabase";
import ItemCard from "./itemCard";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
const Store = () => {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [items, setItems] = useState(null);
  console.log("Store");
  // const handleDelete = (id) => {
  //   setflights((prevFlights) => {
  //     return prevFlights.filter((flight) => flight.id !== id);
  //   });
  // };

  useEffect(() => {
    const fecthItems = async () => {
      const { data, error } = await supabase.from("items").select();
      if (error) {
        setFetchError("Could not fecth flights data");
        setItems(null);
        console.log("Error: ", error);
      }
      if (data) {
        console.log(data);
        setItems(data);
        setFetchError(null);
      }
    };
    fecthItems();
  }, []);

  return (
    <div>
      <div>
        <Link href="/addflight" className={styles.btnStyle}>
          Sort items
        </Link>
        <Link className={styles.btnStyle} href="/AddItem">
          Add a new Item
        </Link>
      </div>
      {fetchError && <p>{fetchError}</p>}
      {items && (
        <div className="items">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
            // onDelete={handleDelete}
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;
