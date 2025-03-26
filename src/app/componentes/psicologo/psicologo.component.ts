import { Component } from '@angular/core';

@Component({
  selector: 'app-psicologo',
  imports: [],
  templateUrl: './psicologo.component.html',
  styleUrl: './psicologo.component.css'
})
export class PsicologoComponent {
  esMovil(): boolean {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  
  llamar() {
    let telefono: string = document.getElementById('numero')?.innerText || "";
  
    if (telefono) {
      if (this.esMovil()) {
        window.location.href = `tel:${telefono}`; // Llama en móvil
      } else {
        alert("Marcar por whatsapp web ")
        window.open(`https://wa.me/${telefono}`, "_blank");
      }
    } else {
      alert("Número no disponible");
    }
  }
}
