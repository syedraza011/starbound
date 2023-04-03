import { useState } from "react";
import supabase from "../../../supabase";
import { useRouter } from "next/router";
import Link from "next/link";

const FlightDetails = ({ flight }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    depart: flight.depart,
    destination: flight.destination,
    departime: flight.departime,
    depardate: flight.depardate,
    returndate: flight.returndate,
    returntime: flight.returntime,
    price: flight.price,
  });

  const handleChange = (e) => {
    console.log("i am here");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("i am in usbmission part");
    console.log("sample output", formData);
    e.preventDefault();
    const {
      depart,
      destination,
      departime,
      depardate,
      returntime,
      returndate,
      price,
    } = formData;
    console.log("Departure origon", depart);
    const { data, error } = await supabase
      .from("flight")
      .update([
        {
          depart,
          destination,
          departime,
          depardate,
          returntime,
          returndate,
          price,
        },
      ])
      .eq("id", flight.id);

    if (error) {
      alert(error.message);
      console.log("Error updating flight:", error);
      return;
    }
    alert("Succes, Updated flight");
    console.log("Flight updated:", data);
    router.push(`/flights/${flight.id}`);
  };

  return (
    <>
      <Link href="/flights">
        <span className="text-2xl leading-none">&larr;</span>
      </Link>
      <div className="w-full max-w-3xl mx-auto py-16 px-8">
        <h1 className="text-3xl mb-6">
          {flight.depart} to {flight.destination}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="depart" className="mb-2 font-medium">
              Departure:
            </label>
            <input
              type="text"
              id="depart"
              name="depart"
              value={formData.depart}
              onChange={handleChange}
              className="border rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="destination" className="mb-2 font-medium">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="border rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="departime" className="mb-2 font-medium">
              Departure time:
            </label>
            <input
              type="text"
              id="departime"
              name="departime"
              value={formData.departime}
              onChange={handleChange}
              className="border rounded py-2 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="depardate" className="mb-2 font-medium">
              Departure Date:
            </label>
            <input
              type="text"
              id="depardate"
              name="depardate"
              value={formData.depardate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="returndate">Return time:</label>
            <input
              type="text"
              id="returntime"
              name="returntime"
              value={formData.returntime}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="returndate">Return Date:</label>
            <input
              type="text"
              id="returndate"
              name="returndate"
              value={formData.returndate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <Link href="/flights">
            <button>Back to Flights Page</button>
          </Link>

          <button type="submit">Update Flight </button>
        </form>
      </div>
    </>
  );
};

export default FlightDetails;

export const getStaticPaths = async () => {
  const { data: flights } = await supabase.from("flight").select("id");

  const paths = flights.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: flight } = await supabase
    .from("flight")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      flight,
    },
  };
};
