import { create } from "react-test-renderer";
import {render, screen} from '@testing-library/react';
import LoginButton from "../components/LoginButton.component";
import LogoutButton from "../components/LogoutButton.component";
import Bootstrap from "../components/Bootstrap/Bootstrap.component";
import { unmountComponentAtNode } from "react-dom";
//import RegisterLogin from "../components/RegisterLogin/RegisterLogin.component";

let props = {
    onClick: 'Prueba'
}
	
let container = null;

beforeEach(() => {
    // configurar un elemento del DOM como objetivo del renderizado
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    // limpieza al salir
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe('test del login', () => {
    test("LoginButton test", () => {
        const button = create(LoginButton(props));
        expect(button).toMatchSnapshot('');      
    });

    test("LogoutButton test", () => {
        const button = create(LogoutButton(props));
        expect(button).toMatchSnapshot('');      
    });

    
    test("Boostrap test", () => {
        render(<Bootstrap/>)
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    
    /*  --Da error - Cannot use import statement outside a module (useDispatch linea 5) 
    test("Mensajes Header test", () => {
        render(<MensajesHeader/>)
        expect(screen.getByRole('table')).toBeInTheDocument();
    });*/

    /*  Da error - Cannot use import statement outside a module  (useDispatch linea 5)
    test("Mensajes Table test", () => {
        render(<MensajesTable/>)
        expect(screen.getByRole('table')).toBeInTheDocument();
    });*/

    /* Da error - useNavigate() may be used only in the context of a <Router> component
    test("Navigation test", () => {
        render(<RegisterLogin/>)
        expect(screen.getByRole('nav')).toBeInTheDocument();
    });*/

    /*
    it("Mock RegisterLogin test", async () => {
        jest.mock('./../components/RegisterLogin/RegisterLogin', () => {
            (<div>ffdf</div>)
        }) 
        
    });
*/
});