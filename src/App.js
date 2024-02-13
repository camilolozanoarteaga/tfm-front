import './App.css';
import Form from './components/form/form'
import Image from './components/images/images';

const App = () => {
  return (
    <div className='container mx-auto h-screen'>
      <div className='grid grid-cols-2 gap-8 h-screen'>
        <div className=''>
          <div className='pt-10'>
            <p className='text-slate-500 text-9xl'>
              Bienvenido
            </p>
            <p className='text-3xl text-slate-400'>
              ingresar la siguiente información.
            </p>
          </div>

          {/* Import form */}
          <Form />
          {/* Close import form */}
        </div>

        {/* Import Image */}
        <Image />
        {/* Close import Image */}
      </div>
    </div>
  );
}

export default App;
