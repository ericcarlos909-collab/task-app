import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tarefa } from '../tarefa.model';
import { HighlightDirective } from '../directives/highlight'; // Importação da diretiva

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, HighlightDirective] // Importante: adicione os 3 aqui
})
export class ListagemPage {
  // Simulação de banco de dados (Mockups)
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Lavar o carro', descricao: 'Usar cera nova', concluida: false },
    { id: 2, titulo: 'Estudar Angular', descricao: 'Praticar diretivas', concluida: true },
    { id: 3, titulo: 'Comprar pão', descricao: 'Integral', concluida: false }
  ];
}
