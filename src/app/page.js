import NavBar from './models/navBar'
import Footer from './models/footer'
import Cards from './models/cards'
import App from './models/app'
import Carousel from './models/carousel'
import Typewriter from './models/type'





export default function Home() {
    return (
      <>
    {/* Nav bar */}
      <NavBar />   
    {/* Nav Bar End */}
    {/* Main Section Start*/}
    <main className="">
      {/* Hero Section Start */}
      <div className=" bg-white sm:pt-[120px] pt-[30px] sm:pb-[110px] lg:pt-[150px]">
        <div className="container mx-auto ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  <p className=""> Informe-se</p>
                  <p className="text-center"> Denuncie</p>
                  <p className='text-right'> <Typewriter text="Descarte!" delay={350} infinite/> </p>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                  Com o Descarte Legal, construtoras, prefeitura e população
                  trabalham juntos por uma cidade mais limpa. Ajude-nos a limpar
                  nossa cidade e:
                </p>
                <App />
              </div>
              <div
                className="p-1 transition hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center"
                id="modal-id"
              >
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <App/>
                    </div>
                    {/* Formulario Section Start */}
                    
                    {/* Form Section end */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onclick="toggleModal('modal-id')"
                      >
                        Close
                      </button>
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden opacity-25 fixed inset-0 z-40 bg-black"
                id="modal-id-backdrop"
              />
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12" />
            <div className="w-full px-4 lg:w-6/12">
                <Carousel/>          
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width={93}
                    height={93}
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="invisible md:visible "
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#75A488" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#75A488" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#75A488" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#75A488" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#75A488" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#75A488" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#75A488" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#75A488" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#75A488" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#75A488" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#75A488" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#75A488" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#75A488" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#75A488" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#75A488" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#75A488" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#75A488" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#75A488" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#75A488" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#75A488" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#75A488" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#75A488" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#75A488" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#75A488" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#75A488" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
      <div className="cards bg-white justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <Cards/>
        </div>
    </main>
    {/* Main Section End */}
    {/* Footer Section Start */}
    <Footer/>
    {/* Footer Section End */}
  </>

    )

}
