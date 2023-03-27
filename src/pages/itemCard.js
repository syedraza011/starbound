import styles from "@/styles/Home.module.css";
import supabase from "../../supabase";
import Link from "next/link";
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
      <div>
        <div className={styles.card}>
          {/* <h3>Item Id for test: {item.id}</h3> */}
         
          <>
          <p className={styles.carditem}>item Image: {item.image} </p>
          <h3>Item Name: {item.name}</h3>
          <p>item price: {item.price}</p>

          <p>Item Details: {item.detail}</p>

          <div> <button className={styles.btnStyle} onClick={handleDelete}>
              Delete
            </button>
            <button className={styles.btnStyle}>
              <Link href={"/EditItem"}>Edit Product</Link>
            </button>
           
           
          
        
           
       
            
          </div>
          </>
                  </div>
      </div>
    </>
  );
};
export default ItemCard;
