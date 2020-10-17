import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceList = () => {
    const [loggedInUser, setLoggedinUser]= useContext(UserContext);
    const [userService, setUserService] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-harbor-33422.herokuapp.com/adding?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=> setUserService(data));
    },[])
    return (
        <div className=" row">
            {
                userService.map(service => <ServiceCard service={service}></ServiceCard>)
            }
        </div>
    );
};

export default ServiceList;