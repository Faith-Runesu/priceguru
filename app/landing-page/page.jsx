"use client";
import { useRouter } from "next/navigation";
import "./styles.css";

const page = () => {
  const router = useRouter();
  return (
    <div className="w-full  flex max-md:flex-col ">
      <div className="md:w-1/2  flex items-center justify-center flex-col max-md:py-16">
        <div className="mb-8 flex items-center justify-center flex-col">
          <h1 className="text-6xl max-md:text-3xl font-bold flex text-center">
            Find the Best Deals,{" "}
          </h1>
          <h1 className=" text-3xl max-md:text-xl">Every Time.</h1>
        </div>
        <button
          className="bg-pink-200 py-5 px-12 rounded-full hover:bg-pink-100"
          onClick={() => {
            router.push("/");
          }}
        >
          Get started
        </button>
      </div>
      <div className="md:w-1/2 h-full bgGradient bg-opacity-20 flex items-center justify-center p-10 lg:p-16">
        <div className="p-8 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">
                Instant Price Comparison
              </h3>
              <p>Get real-time price comparisons from leading online stores.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Exclusive Discounts</h3>
              <p>
                Access special deals and discounts available only to our users.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Product Reviews</h3>
              <p>
                Read reviews from real customers to make informed decisions.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Price Alerts</h3>
              <p>
                Set up alerts to get notified when prices drop on your favorite
                items.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Easy to Use</h3>
              <p>
                Simple, intuitive interface that makes finding the best deals a
                breeze.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
