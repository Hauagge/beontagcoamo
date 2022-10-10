import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {CgSpinner} from 'react-icons/cg';
import {IoReturnDownBack} from 'react-icons/io5';
import api from '../../services/api';


export default function InsertProducts() {
    const [loading, setLoading] = useState(true);

/*     useEffect(() => {
        setLoading(true)
        fetch('http://100.64.2.160:3000/insert', {mode: 'no-cors'})
          .then((res) => console.log(res))
      }, []) */

      useEffect(() => {
        async function InsertProducts(): Promise<void>{

            try {
                
                const response = await api.post(`/insert`);
                console.log(response)
                if(response){
                    setLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }

        InsertProducts();
    }, [loading]);
    
    return(
        <>
            <Head>
                <title>Inserir | Hackacton BeonTag-Coamo</title>    
            </Head>
            <section className='bg-gray-900 min-h-screen min-w-screen p-8 h-full w-full flex items-center justify-center' >

                {
                    loading ? (

                        <div className='flex jusity-center items-center gap-4'>
                                <CgSpinner className='text-6xl animate-spin text-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'/>
                            <div className='text-white text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl md:text-8xl'>
                                Carregando
                            </div>  
                        </div>
                    )
                    : (
                        <div className='flex flex-col gap-10 justify-center items-center'>
                            <div className='py-4 px-6 text-center rounded-lg bg-green-300 text-gray-800 text-xl xxsm:text-2xl xsm:text-4xl sm:text-6xl '>
                                Equipamento cadastrado com sucesso
                            </div>
                            <div className='flex gap-10'>

                                <Link passHref href='/'>
                                    <button className='text-white border-2 w-fit text-xl xxsm:text-2xl xsm:text-4xl py-4 px-6 rounded-lg hover:bg-gray-100 hover:text-gray-800 duration-150 hover:underline flex items-center justify-center gap-2'>
                                        <IoReturnDownBack/>
                                        Voltar
                                    </button>
                                </Link>

                                <button onClick={() => setLoading(true)} className='text-sky-500 border-sky-500 border-2 w-fit text-xl xxsm:text-2xl xsm:text-4xl py-4 px-6 rounded-lg  hover:bg-sky-300 hover:text-gray-800 duration-150 hover:underline'>
                                    Outro Produto?
                                </button>
                            </div>

                        </div>
                    )
                }

            </section>
        </>
    )
}