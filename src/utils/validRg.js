
export default function validarRG(rg) {

    rg = rg.replace(/[^\d]+/g, ''); 

    if (rg.length < 4 || rg.length > 9) return false; 
  
    if (/^(\d)\1+$/.test(rg)) return false;
  
    return true; 
  }