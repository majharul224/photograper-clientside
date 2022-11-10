
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = ({items}) => {
    const services = useLoaderData()
    // console.log(services)
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-20'>
            {
                items?.map(service => <Service
                    key={service._id} service={service} >
                </Service>)
            }
        </div>
    );
};

export default Services;