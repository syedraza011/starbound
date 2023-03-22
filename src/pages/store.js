import Image from "next/image";
import Link from "next/link";
const Store = () => {
  return (
    <>
      <h1>Store page</h1>

      <div className="container">
        <div className=" border-dotted allitems">
          <div className=" hover:border-dotted border-blue-500  single-card">
            {/* <Image
              fill
              sizes="(max-width: 768px) 100vw
                    
              src="https://cdn.mos.cms.futurecdn.net/QHvQLhnFjrD6RgWgyZSHRn.jpg"
              alt="item image"
            /> */}
            <h2>Item Image</h2>
            <h3>{"Mercury's Stone"}</h3>
            <p>item Details</p>
            <p>Item price</p>
            <button className="ring-offset-2 ring-2 ring-{width=2px} ">
              Add item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Store;
