import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../service/service.component';

@Component({
  selector: 'app-poem-read',
  templateUrl: './poem-read.component.html',
  styleUrls: ['./poem-read.component.scss']
})
export class PoemReadComponent implements OnInit {

  poemslist;
  pageLength;
  splicedData;
  pageSize=2;

  constructor(private swaggerService: SwaggerService) { }

  async ngOnInit() {
    this.poemslist=   await this.getPoems();
    this.pageLength = this.poemslist.poems.length;
    this.splicedData = this.poemslist.poems.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);
    console.log(this.poemslist);
   
  }

  async getPoems(){
    return await this.swaggerService.getPoems();
  }

  pageChangeEvent(event: { pageIndex: number; pageSize: number; }) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    console.log('page change event..', this.splicedData);
    this.splicedData = this.poemslist.poems.slice(offset).slice(0, event.pageSize);
  }

  

}
