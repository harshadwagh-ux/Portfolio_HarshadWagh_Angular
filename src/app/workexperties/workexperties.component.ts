import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-workexperties',
  standalone: true,
  templateUrl: './workexperties.component.html',
  styleUrl: './workexperties.component.scss',
  imports: [MatTableModule, MatPaginatorModule]
})
export class WorkexpertiesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>();

    ELEMENT_DATA: any = [
      { "position": 1, "name": "Hydrogen", "weight": 1.0079, "symbol": "H" },
      { "position": 2, "name": "Helium", "weight": 4.0026, "symbol": "He" },
      { "position": 3, "name": "Lithium", "weight": 6.941, "symbol": "Li" },
      { "position": 4, "name": "Beryllium", "weight": 9.0122, "symbol": "Be" },
      { "position": 5, "name": "Boron", "weight": 10.811, "symbol": "B" }
    ]
  forfilter: any;
    

  ngOnInit(): void {
    this.forfilter=this.ELEMENT_DATA
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA); 
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  demo1:any
  demo2:any
  demo3:any
  search1(event:any){
    const input= event.target.value as HTMLInputElement
    this.demo1=input
    if(this.demo1!=0){
      this.ELEMENT_DATA=this.forfilter.filter((item:any) => item.name.toLowerCase().includes(this.demo1.toLowerCase()))
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA); 
    }else{
      this.ELEMENT_DATA=this.forfilter
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA); 
    }
  }
  search2(event:any){
    const input= event.target.value as HTMLInputElement
    this.demo2=input
    if(this.demo2!=0){
      this.ELEMENT_DATA=this.forfilter.filter((item:any) => item.weight == this.demo2)
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA); 
    }else{
      this.ELEMENT_DATA=this.forfilter
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA); 
    }
    

  }
  search3(event:any){
    const input= event.target.value as HTMLInputElement
    this.demo3=input
    if(this.demo3!=0){
      this.ELEMENT_DATA=this.forfilter.filter((item:any) => item.symbol.toLowerCase().includes(this.demo3.toLowerCase()))
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA); 
    }else{
      this.ELEMENT_DATA=this.forfilter
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA); 
    }

  }

}


