import { Component, signal } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { tick } from '@angular/core/testing';
import { HelloWordService } from '../../services/hello-word.service';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent,SidenavComponent,MatButtonModule, MatMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cat = "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/75552.jpg?w=1900&h=1267"
  name = signal("luan");
  cont = signal(0);
  value = signal(false);
  list=signal(["luan","italo","Mota"]);
  list2=signal([]);
  data =null;
  a =signal(this.name()+ this.cont());
  test(){
    this.value.update(value=>true);
    this.cont.update(cont => cont+1);
    this.a.set(this.name()+this.cont());
  }
  constructor(private service:HelloWordService){
    this.service.getHelloword().subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.data = data[0].type;
        },
        error: (error)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log("final");
        }
      }
    )
  }
  
  
}
