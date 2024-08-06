import { Injectable } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [];

  constructor() {}

  getProdutos(): Produto[] {
    return this.produtos;
  }

  addProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  removeProduto(id: number): void {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
