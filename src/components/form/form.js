const Form = () => {
  return (
    <form>
      <div className='border-b border-gray-900/10 pt-12'>
        <h2 class="text-base font-semibold leading-7 text-gray-900">información personal</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">La siguiente información sera tratada bajos las normas de privacidad de información.</p>
      </div>
      <div class="col-span-full mt-5">
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre Completo</label>
        <div class="mt-2">
          <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="col-span-full mt-5">
        <label for="dni" class="block text-sm font-medium leading-6 text-gray-900">DNI / CC</label>
        <div class="mt-2">
          <input type="text" name="dni" id="dni" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="col-span-full mt-5">
        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Subir imagen</label>
        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
            </svg>
            <div class="mt-4 flex text-sm leading-6 text-gray-600">
              <label for="file" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Subir imagen</span>
                <input id="file" name="file" type="file" class="sr-only" />
              </label>
              <p class="pl-1">o arrastrar y soltar</p>
            </div>
            <p class="text-xs leading-5 text-gray-600">PNG, JPG up to 100MB</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
