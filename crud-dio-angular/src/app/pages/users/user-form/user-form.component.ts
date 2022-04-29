import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];
  userId:any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
    this.userForm = this.fb.group({
      id:0,
      nome:'',
      sobrenome:'',
      idade:0,
      profissao:''
    })
  }

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.paramMap.subscribe(params =>{
      this.userId = params.get('id');      
      if(this.userId !== null){       
        this.userService.getUserByID(this.userId).subscribe(resp =>{
          console.log('On init',resp[0].nome); 
          this.userForm.patchValue({
            id: resp[0].id,
            nome: resp[0].nome,
            sobrenome: resp[0].sobrenome,
            idade: resp[0].idade,
            profissao: resp[0].profissao
          });
        })
      }else{
        console.log('Id não doferente de nulo');
      }
    },(err)=>{console.log(err)})
  }
  actionUser(){
    if(this.userId !== null){
      this.updateUser();
    }else{
      this.createUser();
    }
  }
  updateUser(){
    this.userService.updateUser(this.userId,this.userForm.value).subscribe(resp => {
      console.log('Atualizado')
    },(err) => {console.log(err)},()=>{
      this.router.navigate(['/']);
    });
  }
  createUser(){
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`Usuario ${result.nome} cadastrado`);
    },(err) => {console.log(err)},()=>{
      this.router.navigate(['/']);
    });
  }
  getUsers(){  
    this.userService.getUsers().subscribe(resp =>{
      this.users = resp;
    })
  }
}
