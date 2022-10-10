import Head from "next/head";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import api from "../../services/api";

export default function ListAllProducts() {
  const [response, setResponse] = useState("ok");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function findProducts(): Promise<void> {
      try {
        const response = await api.post(`/check`);
        console.log(response);
        if (response) {
          setResponse(response.data.message);
          setLoading(false);
        }
      } catch ({ response }) {
        setResponse(response.data.error);
        setLoading(false);
      }
    }

    findProducts();
  }, [loading]);

  return (
    <>
      <Head>
        <title>Lista de Produtos | Hackacton BeonTag-Coamo</title>
      </Head>
      {loading ? (
        <section className="bg-gray-900 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center">
          <div className="flex jusity-center items-center gap-4">
            <CgSpinner className="text-6xl animate-spin text-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
            <div className="text-white text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl">
              Carregando
            </div>
          </div>
        </section>
      ) : response === "ok" ? (
        <div className="bg-emerald-700 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center text-white">
          <div className="text-white text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl">
            Produto Liberado
          </div>
        </div>
      ) : response === "wrong" ? (
        <div className="bg-orange-700 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center text-white">
          <div className="text-white text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl">
            Produto Incorreto
          </div>
        </div>
      ) : response === "violated" ? (
        <div className="bg-rose-700 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center text-white">
          <div className="text-white text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl">
            Produto violado
          </div>
        </div>
      ) : (
        <div className="bg-gray-900 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center text-white">
          <div className="text-white text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl">
            Não encontrado
          </div>
        </div>
      )}
    </>
  );
}
