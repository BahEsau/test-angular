
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {
  name = 'Bah Esau';
  email ='esau@gmail.com';
  phone ='680000000'
  displayedColumns: string[] = ['position', 'date', 'success'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  date: string;
  success: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '01-02-2024',  success: true},
  {position: 2, date: '02-03-2024',  success: false},
  {position: 3, date: '03-04-2024',  success: true},
  {position: 4, date: '04-05-2024',  success: false},
  {position: 5, date: '04-05-2024',  success: false},
  {position: 6, date: '04-05-2024',  success: false},
 
];
