import './MensajesTable.component.scss';

/**
 * /* Fijaos que ponemos un espacio ' ' después de 'clase1'
 * si no hicieramos esto, tendríamos un elemento HTML con
 * un estilo 'clase1clase2', clase CSS que no exisitiría. **/
 /* className={'clase1 ' + (valor > 5 ? 'clase2' : 'clase3')}     */

/* También podemos eligir un solo valor */
/* className{(valor === 3 ? 'clase' : '')}     */

export default function MensajesTable(props) {
  let esDeDia = localStorage.getItem('cambioStyle');
  console.log(esDeDia);
    
  return (
    <table className="MensajesTable">
  
      <thead className="Header">
        <tr>
          <th>Index</th>
          <th>Asunto</th>
          <th>Email</th>
          <th>Mensaje</th>
          <th>Acciones rápidas</th>
        </tr>
      </thead>
  
      <tbody>
        {props.mensajes.map(((mensaje, index) => 
          (<tr key={index} id={index}
          className={(mensaje.leido ? 'ElementoLeido' : 'ElementoNoLeido')}>          
          <td>{index}</td>
             <td>{mensaje.asunto}</td>
             <td>{mensaje.email}</td>
             <td>{mensaje.mensaje}</td>
             <td>
               <button className="Leido" title="Marcar como leido"
               onClick={() => {props.clickMarcarLeido(index)}}>
               {(mensaje.leido ? '📖' : '📕')}</button>

               <button className="Borrar" title="Borrar mensaje"
               onClick={() => {props.clickEliminarUno(index)}}>🗑</button>
             </td>
          </tr>)
        ))}
      </tbody>
    </table>
  );
}