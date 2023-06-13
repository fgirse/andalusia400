import Feed from "@components/Feed";
import Team from "@sections/Team";
import { archidaught } from '../utils/fonts';

const Home = () => (
   <>
  <section className='bg-[url("/assets/images/andalusiaRedRoofs.jpg")]
   bg-cover bg-no-repeat h-[80vh]
   w-full flex-center flex-col rounded-2xl'>
    <div className={archidaught.className}>
    <div className="mt-[-10vh] bg-gray-300/10 rounded-2xl px-3 py-3">
    <h1 className='head_text text-center'>
      Wohntraum
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Andalusia</span>
    </h1>
    </div>
    <p className='desc text-center'>
 
    </p>
    </div>
    <Feed />  
  </section>
  

   </>
);

export default Home;


