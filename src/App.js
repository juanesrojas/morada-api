import { GlobalStyle } from "./globalStyles";
import { Navigation } from "./Navigation";
import { Home as Home2} from "./pages/Home";
import { PropertyTypeBtn } from "./pages/Home/components/PropertyTypeBtn";


// Home as Home2 se usa si existen varios componentes con el mismo nombre y los voy a invocar en este componente.
export const App=()=> (
    <>
    <GlobalStyle/>
        <Navigation/>

    </>   

        
)