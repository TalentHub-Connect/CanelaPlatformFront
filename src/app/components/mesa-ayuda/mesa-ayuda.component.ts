import { Component } from '@angular/core';

@Component({
  selector: 'app-mesa-ayuda',
  templateUrl: './mesa-ayuda.component.html',
  styleUrls: ['./mesa-ayuda.component.css'],
})
export class MesaAyudaComponent {
  // Método para mostrar el contenido seleccionado (descripción o respuesta)
  showContent(content: string) {
    const descriptionContent = document.querySelector('.description-content');
    const responseContent = document.querySelector('.response-content');
    const descriptionPagination = document.querySelector('.pagination-item:nth-child(1)');
    const responsePagination = document.querySelector('.pagination-item:nth-child(2)');

    if (content === 'description') {
      descriptionContent?.classList.add('active');
      responseContent?.classList.remove('active');
      descriptionPagination?.classList.add('active');
      responsePagination?.classList.remove('active');
    } else if (content === 'response') {
      descriptionContent?.classList.remove('active');
      responseContent?.classList.add('active');
      descriptionPagination?.classList.remove('active');
      responsePagination?.classList.add('active');
    }
  }

  // Método para enviar el contenido editado de la respuesta
  // Método para enviar el contenido editado de la respuesta
enviarRespuesta() {
  const textarea = document.querySelector('.response-textarea') as HTMLTextAreaElement;
  const responseContent = document.querySelector('.response-content p');

  if (textarea && responseContent) {
    responseContent.textContent = textarea.value;
  }
}

}
