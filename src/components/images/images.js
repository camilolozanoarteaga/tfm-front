const Images = () => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg bg-white h-3/5">
        <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="" className="object-cover object-center" />
      </div>
      <h3 className="mt-6 text-4xl text-gray-500">
        Resultados
      </h3>
      <p className="text-base font-semibold text-gray-700">La tomografia enviada, tiene un <span className='text-5xl text-blue-600/100'>15%</span> de probabilidad de tener cancer</p>
    </div>
  );
}

export default Images;
