import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from './models/pessoa';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PessoaService } from './pessoa.service'

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {
  displayedColumns: string[] = ['actionsColumn', 'id', 'nome', 'idade'];
  pessoa: Pessoa;
  pessoas: any;
  edit: boolean;
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoas = new Array<Pessoa>();
    this.dataSource = new MatTableDataSource<Pessoa>(this.pessoas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.findAll();
  }

  salvar() {
    this.pessoaService.save(this.pessoa).subscribe(response => {
      if (response)
        alert('Salvou!!!!');
      this.findAll();
    }, error => {
      console.log(error);
    });

  }

  excluir(pessoaId: number) {
    this.pessoaService.remove(pessoaId).subscribe(response => {
      if (response) {
        alert('Excluiu!!!!');
        this.findAll();
      }
    }, error => {
      console.log(error);
    });
  }

  atualizar() {
    this.pessoaService.update(this.pessoa).subscribe(response => {
      if (response) {
        alert('Alterou!!!!');
        this.findAll();
        this.edit = false;
      }
    }, error => {
      console.log(error);
    })
  }

  editar(pessoa: any) {
    this.pessoa = pessoa;
    this.edit = true;
  }

  findAll() {
    this.pessoaService.findAll().subscribe(response => {
      if (response) {
        this.loadTable(response);
      }
    }, error => {
      console.log(error);
    })
  }

  loadTable(pessoas: any) {
    this.pessoas = pessoas;
    this.dataSource = new MatTableDataSource<Pessoa>(this.pessoas);
  }

}
