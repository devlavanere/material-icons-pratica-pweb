import { Component } from '@angular/core';
import { Produto, ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  produto: Produto = { id: 0, nome: '', preco: 0 };

  constructor(private produtoService: ProdutoService) {}

  adicionarProduto(): void {
    this.produto.id = new Date().getTime();
    this.produtoService.addProduto(this.produto);
    this.produto = { id: 0, nome: '', preco: 0 }; // Resetar o formulário
  }
}
