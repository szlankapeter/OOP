import {LISTA} from "./adatok.js";
import Elem from "./termek.js";

class Termekek{
    constructor(){
        const ART = $("article");
        for(let i = 0; i < LISTA.length; i++){
            const elem = new Elem(ART, LISTA[i]);
        }
    }
}export default Termekek


