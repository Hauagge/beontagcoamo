import Head from "next/head";
import { BsCheck } from "react-icons/bs";
import { RiArrowUpDownLine } from "react-icons/ri";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { IoReturnDownBack } from "react-icons/io5";
import Link from "next/link";
import { CgSpinner } from "react-icons/cg";
import api from "../../services/api";

export default function getProducts() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function findProducts(): Promise<void> {
      try {
        const response = await api.get(`/find/prod`);
        console.log(response);
        if (response) {
          setLoading(false);
          const product = response.data.map((product) => {
            const productToReturn = {
              id: product.id,
              name: product.name,
              location: product.location.local_identification,
            };
            return productToReturn;
          });
          setProducts(product);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    findProducts();
  }, [loading]);

  /*     const products = [
        { id: 1, name: 'Produto 1', location: 'Prateleira 1' },
        { id: 2, name: 'Produto 2', location: 'Prateleira 2' },
      ]   */

  const filteredProducts =
    query === ""
      ? products
      : products.filter((product) =>
          product.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <Head>
        <title>Buscar | Hackacton BeonTag-Coamo</title>
      </Head>
      <section className="bg-gray-900 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center">
        {loading ? (
          <section className="bg-gray-900 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center">
            <div className="flex jusity-center items-center gap-4">
              <CgSpinner className="text-6xl animate-spin text-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <div className="text-white text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl">
                Carregando
              </div>
            </div>
          </section>
        ) : (
          <form className="placeholder:text-white text-white bg-sky-700 p-8 rounded-lg flex flex-col items-center justify-center gap-4">
            <Link passHref href="/">
              <button className="place-self-start text-white w-fit text-xl py-4 px-6 rounded-lg hover:bg-white hover:text-gray-900 duration-150 hover:underline flex items-center justify-center gap-2">
                <IoReturnDownBack />
                Voltar
              </button>
            </Link>
            <div className="text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl">
              Buscar produtos
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-10">
              <label htmlFor="combobox" className="text-lg">
                Selecione um produto
              </label>
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(product) => product.name}
                      onChange={(event) => setQuery(event.target.value)}
                      autoComplete="off"
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <RiArrowUpDownLine
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredProducts.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredProducts.map((product) => (
                          <Combobox.Option
                            key={product.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={product}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {product.name}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-black" : "text-teal-600"
                                    }`}
                                  >
                                    <BsCheck
                                      className="h-5 w-5 "
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            <div>
              {selected && (
                <div className="text-xl">
                  Localização do Produto: &nbsp;
                  <Link passHref href="/listAllProducts">
                    <span className="font-bold">{selected.location}</span>
                  </Link>
                </div>
              )}
            </div>
          </form>
        )}
      </section>
    </>
  );
}
