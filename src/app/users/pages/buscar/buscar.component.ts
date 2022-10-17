import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService ) { }

  ngOnInit(): void {
    this.buscar();
  }
  
  async buscar() {
    this.usersService.buscarUsuarios()
    .subscribe((usersList) => {
      
      console.log(usersList);
      this.users = usersList.users;
      console.log(this.users);
      
      }, (error) =>{
        console.log(error);
      }
    );
  }

}
