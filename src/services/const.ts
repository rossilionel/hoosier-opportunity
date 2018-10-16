import { Injectable } from '@angular/core';


@Injectable()
export class ConstData {
	public apiAddress = 'https://hoosieropportunity.com/api';
	public jobsUrl = this.apiAddress+'/careers.php';
	public eventsUrl = this.apiAddress+'/events.php';
  public newsUrl = 'https://hoosieropportunity.com/blog/api/get_posts/';

  public filterUrl = "https://hoosieropportunity.com/api/options.php?id=";

  private userphoto: string= '';

  constructor() {

  }

  
}
