import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Store.module.css";
import supabase from "../../supabase";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai"
import { RiDeleteBin2Fill } from "react-icons/ri"
import {useState} from "react-dom"
const ItemCard = ({ item}) => {

  console.log("ItemCard", item);
  // item = this.props;
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("items")
      .delete()
      .eq("id", item.id);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(item.id);
    }
  };

  return (
    <>
      <div className={robStyles.itemBox}>
        <div className={styles.card}>
          {/* <h3>Item Id for test: {item.id}</h3> */}
         
          <>
          <p>
            <img src={item.image} width="150" />
            <h3>Item Name: {item.name}</h3>
            <p>item price: {item.price}</p>
          </p>

          <p>Item Details: {item.detail}</p>

          <div className={robStyles.itemCardBttn} > 
            <button className={styles.btnStyle} onClick={handleDelete}>
              < RiDeleteBin2Fill />
            </button>
            <button className={styles.btnStyle}>
              <Link href={"/EditItem"}>
                < AiFillEdit />
              </Link>
            </button>            
          </div>
          </>
                  </div>
      </div>
    </>
  );
};
export default ItemCard;
