import type { NextPage } from "next";
import Layout from "src/components/layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  return (
    <Layout canGoBack>
      <div className="px-4 py-10">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <div className="flex items-center py-3 space-x-3 border-t border-b cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">
                {data?.product?.user?.name}
              </p>
              <Link href={`/users/profiles/${data?.product?.user?.id}`}>
                <a className="text-xs font-medium text-gray-500">
                  View profile &rarr;
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.product?.name}
            </h1>
            <span className="block mt-3 text-2xl text-gray-900">
              {data?.product?.price}
            </span>
            <p className="my-6 text-gray-700 ">{data?.product?.description}</p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 py-3 font-medium text-white bg-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-orange-600 focus:ring-orange-500 ">
                Talk to seller
              </button>
              <button className="flex items-center justify-center p-3 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500">
                <svg
                  className="w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6 ">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="w-full h-56 mb-4 bg-slate-300" />
                <h3 className="-mb-1 text-gray-700">Galaxy S60</h3>
                <span className="text-sm font-medium text-gray-900">$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
