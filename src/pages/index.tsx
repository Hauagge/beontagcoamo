import Head from "next/head";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Hackacton BeonTag-Coamo</title>
      </Head>
      <section className="bg-gray-900 min-h-screen min-w-screen p-8 h-full w-full flex flex-col  gap-10 items-center justify-center">
        <Image src={"/logo_agrodatatag.png"} width={966} height={410} />
        <div className="flex gap-8">
          <Link href="/insertProducts">
            <button className="text-sky-500 border-sky-500 text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl lg:text-8xl py-4 px-6 border-2 rounded-lg hover:bg-sky-300 hover:underline hover:text-gray-800 duration-150 flex items-center justify-center gap-2">
              <IoMdAddCircleOutline />
              Inserir
              {
                //neste modo deve ser enviado para o back que o equipamento deve estar em modo de cadastro
                //deverá aparecer uma página escrito carregando
                //o leitor deverá passar em duas tags para cadastra-las, só sai disso quando ler as duas tags
                //deverá voltar pra pagina inicial e aparecer uma página escrito cadastrado com sucesso
              }
            </button>
          </Link>

          <Link href="/searchProducts">
            <button className="text-emerald-500 border-emerald-500 text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl lg:text-8xl py-4 px-6 border-2 rounded-lg hover:bg-emerald-300 hover:underline hover:text-gray-800 duration-150 flex items-center justify-center gap-2">
              <AiOutlineSearch />
              Buscar
              {
                // nesta nova página será inputado o nome do produto
                // o backend vai retornar em qual prateleira está o produto
                // deverá ter um botão voltar
              }
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

// pagina de saída do estoque
// enviar para o backend que o equipamento estará em modo portal
// listagem de produtos - mostrando a localização dele
// envia uma montificação avisando se o produto foi correto foi retirado
// envia uma notificação avisando se o produto está com o lacre rompido
