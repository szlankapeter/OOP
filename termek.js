class Elem{
    constructor(ART, adat){
        this.adat = adat;
        ART.append(`<div class="elem"><p>${this.adat.nev}</p>
        <p>${this.adat.ar}</p>
        <button>kedvencek</button>
        </div>`);
        this.elem = $("elem:last-child")
        this.buttonElem = this.elem.children("button");
    }


}export default Elem