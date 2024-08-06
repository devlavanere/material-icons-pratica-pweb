import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
  }

  removerProduto(id: number): void {
    this.produtoService.removeProduto(id);
    this.produtos = this.produtoService.getProdutos();
  }
}
