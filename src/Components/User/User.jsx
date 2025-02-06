
import { useLoaderData } from 'react-router-dom';
import Singleuser from '../Singleuser/Singleuser';

const User = () => {
    
    const data = useLoaderData();
   
    return (
        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-4 my-5 '>
            {data.map(data=><Singleuser key={data.id} data={data}></Singleuser>)}
        </div>
    );
};

export default User;