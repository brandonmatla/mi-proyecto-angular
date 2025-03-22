import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  text: string = ''; 
  
  showAlert: boolean = false;
  enviarWhatsApp() {
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const correo = (<HTMLInputElement>document.getElementById('correo')).value;
    const mensaje = (<HTMLTextAreaElement>document.getElementById('mensaje')).value;

    const url = `https://wa.me/5575718154?text=Hola, mi nombre es ${nombre}, mi correo es ${correo} y mi mensaje es: ${mensaje}`;
    
    if (nombre === "") {
      this.text = "Por favor, ingrese su nombre.";
      this.showAlert = true;
    } else if (correo === "") {
      this.text = "Por favor, ingrese su correo.";
      this.showAlert = true;
    } else if (mensaje === "") {
      this.text = "Por favor, ingrese su mensaje.";
      this.showAlert = true;
    } else if (!correo.includes("@") || !correo.includes(".com")) {
      this.text = "El correo no tiene el formato adecuado.";
      this.showAlert = true;
    } else {
      window.open(url, '_blank');
    }

      if (this.showAlert) {
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
  }
  

}
