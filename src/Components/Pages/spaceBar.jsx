import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 


function SpaceBar(){
    const [users, setUsers]= useState([]);
    const [tableUsers, setTableUsers]= useState([]);
    const [search, setSearch]= useState('');

    const petitionGet=async()=>{
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            setUsers(response.data);
            setTableUsers(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleChange=e=>{
        setSearch(e.target.value);
        filter(e.target.value);
    }

    const filter=(searchTerm)=>{
        let resultSearch=tableUsers.filter((element)=>{
            if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
            || element.company.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
            ){
                return element;
            }
        });
        setUsers(resultSearch);
    }

    useEffect(()=>{
        petitionGet();
    },[])
        return(
            <div className='spaceBar'>
                <div className='containerInput'>
                    <input 
                    className='form-control inputSearch'
                    value={search}
                    placeholder='Buscar servicio, cursos, productos'
                    onChange={handleChange}>
                    </input>
                    <button className='btn btn-success'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
        );
    }


export default SpaceBar;





//https://www.youtube.com/watch?v=HPMSBCfdKKU
//BARRA BUSCADORA YOUTUBE

/*<div className='table-responsive'>
                    <table className='tale table-sm table-bordered'>
                        <thead>
                            <tr>
                               <th>ID</th> 
                               <th>Nombre</th> 
                               <th>Teléfono</th> 
                               <th>Nombre de Usuario</th> 
                               <th>Correo</th> 
                               <th>Sitio Web</th> 
                               <th>Ciudad</th> 
                               <th>Empresa</th> 
                            </tr>
                        </thead>

                        <tbody>
                            {users &&
                            users.map((user)=>(
                                <tr key={user.id}>
                                    <td>{user.id }</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>*/