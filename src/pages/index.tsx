import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-10 px-10 py-20 bg-slate-400">
      <div className="p-10 bg-white shadow-xl rounded-2xl">
        <span>Select Item</span>
        <div>
          <span>Gray Chair</span>
          <span>$19</span>
        </div>
        <div>
          <span>Gray Chair</span>
          <span>$19</span>
        </div>
        <div>
          <span>Total</span>
          <span>$10</span>
        </div>
        <div>Checkout</div>
      </div>
      <div className="p-10 bg-white shadow-xl rounded-2xl"></div>
      <div className="p-10 bg-white shadow-xl rounded-2xl"></div>
      <div className="p-10 bg-white shadow-xl rounded-2xl"></div>
    </div>
  );
};

export default Home;
