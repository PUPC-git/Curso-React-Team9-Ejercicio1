import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect, useState, useDispatch, useSelector } from 'react';
import { setProducts } from '../../redux/actions/actions';
import { GET, GET_AXIOS } from '../../services/http.services';
import './Store.component.scss';

/* IMPORTANTE: Este es solo un ejemplo de código, puede que vuestro
 * proyecto sea diferente y no por ello implica que sea incorrecto. */

export default function Store() {
    /** Estado y variables internas */
    
    const [products, setProducts] = useState([]);
    //const products = useSelector(state => state);
    //const dispatch = useDispatch();
  
    
    /** Métodos del ciclo de vida */
    useEffect(() => {
      getData();
    }, []);

    const getData = () => { 
        GET('/products/')
        .then(data => {
            console.log("✅ Hemos recibido los datos correctamente: ", data);
            setProducts(data);
      //      dispatch(setProducts([...data]));
        })
        .catch(error => {
           console.error("❌ Algo ha ido mal con la petición...", error);
        })
        .finally(() => {
            console.log('terminado')
            console.table(products);
        });
    }

    return (
        <div className="container vh-10 mw-10" style={{color: 'red'}} >
                 
                 <br/>
                 <br/>
                 { products.map((product, index) => 
                    (<div key={index} className="container">
                        <h6 className="container p-4"  class="badge bg-secondary " > {product.title}</h6>
                        <p>
                            <table style={{width: '100%'}} class="table">
                                <tr >
                                    <th style={{width: '10%'}} class="table-success">
                                        Precio: 
                                    </th>
                                    <td style={{width: '40%'}} class="text-primary" >
                                        {product.price} 
                                    </td>
                                    <td rowSpan='4' style={{width: '100px'}}>
                                        <div class="card" >
                                           <img src={product.image} style={{width: '100px'}} alt="" class="card-img-top"/>                            
                                           
                                        </div>
                                    </td>
                                </tr>
                                <tr >
                                    <th style={{width: '10%'}}>
                                        Categoria: 
                                    </th>
                                    <td style={{width: '40%'}} class="text-primary">
                                        {product.category} 
                                    </td>
                                </tr>
                                <tr >
                                   <th style={{width: '10%'}}>
                                        Valoracion: 
                                    </th> 
                                    <td style={{width: '40%'}} class="text-primary">
                                        {product.rating.rate} 
                                    </td>
                                </tr>
                                <tr >
                                    <th style={{width: '10%'}}>
                                        Ventas: 
                                    </th>
                                    <td style={{width: '40%'}} class="text-primary">
                                        {product.rating.count} 
                                    </td>
                                </tr>
                                <tr >
                                    <td colSpan='3' class="text-primary">
                                        {product.description}
                                    </td>
                                </tr>
                            </table>
                            <br/>
                        </p>
                        
                      </div>
                    )
                 )}
        </div>
    )
    
}