import { Component, OnInit, ViewChild } from '@angular/core';
import { Cidade } from './models/cidade';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CidadeService } from './cidade.service';
@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})
export class CidadeComponent implements OnInit {
  displayedColumns: string[] = ['actionsColumn', 'id', 'nome', 'numerohabitantes'];
  cidade: Cidade;
  cidades: any;
  edit: boolean;
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.cidade = new Cidade();
    this.cidades = new Array<Cidade>();
    this.dataSource = new MatTableDataSource<Cidade>(this.cidades);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.findAll();
  }

  salvar() {
    this.cidadeService.save(this.cidade).subscribe(response => {
      if (response)
        alert('Salvou!!!!');
      this.findAll();
    }, error => {
      console.log(error);
    });

  }

  excluir(cidadeId: number) {
    this.cidadeService.remove(cidadeId).subscribe(response => {
      if (response) {
        alert('Excluiu!!!!');
        this.findAll();
      }
    }, error => {
      console.log(error);
    });
  }

  atualizar() {
    this.cidadeService.update(this.cidade).subscribe(response => {
      if (response) {
        alert('Alterou!!!!');
        this.findAll();
        this.edit = false;
      }
    }, error => {
      console.log(error);
    })
  }

  editar(cidade: any) {
    this.cidade = cidade;
    this.edit = true;
  }

  findAll() {
    this.cidadeService.findAll().subscribe(response => {
      if (response) {
        this.loadTable(response);
      }
    }, error => {
      console.log(error);
    })
  }

  loadTable(cidades: any) {
    this.cidades = cidades;
    this.dataSource = new MatTableDataSource<Cidade>(this.cidades);
  }

}
