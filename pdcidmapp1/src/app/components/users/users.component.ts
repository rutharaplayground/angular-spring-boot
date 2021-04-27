import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { timeoutWith } from 'rxjs/operators';
import {Users} from 'src/app/common/users';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];
  searchMode: boolean = false;
  userModal = false;
  mode = "Add";
  modalDelete = false;
  user: Users = JSON.parse(JSON.stringify(new Users()))
  closeModal: string;
  modalReference: NgbModalRef;

    // new properties for pagination
    thePageNumber: number = 1;
    thePageSize: number = 5;
    theTotalElements: number = 0;

    previousKeyword: string = '';
    theKeyword : string = '';

  constructor(private userservice: UsersService,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listUsers();
    });
  }

  listUsers() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchUsers();
    }
    else {
      this.handleListUsers();
    }

  }

  handleSearchUsers() {

    
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    //const theKeyword: string = '';

    // if we have a different keyword than previous
    // then set thePageNumber to 1

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for the products using keyword
    this.userservice.searchUsersPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               theKeyword).subscribe(this.processResult());
                                               
  }

  handleListUsers() {

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    console.log(`thePageNumber=${this.thePageNumber}`);

    // now get the products for the given category id
    this.userservice.getUsersListPaginate(this.thePageNumber - 1,
                                               this.thePageSize,)
                                               .subscribe(this.processResult());
  }

  processResult() {
    return data => {
      this.users = data.content;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listUsers();
  }

  addUser(){
	  this.mode='Add';
	  this.userModal = true;
  }

  editUser(item){
    console.log('Edit User  ::  ',item)
  	this.mode='Edit';
  	this.user=JSON.parse(JSON.stringify(item));
  	this.userModal=true;
  }

  deleteModal(modalData, item){
    console.log('delete user modal')
	  this.mode="Delete";
	  this.user = item;
	  this.modalDelete= true;
    this.modalReference = this.modalService.open(modalData, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveOrEdit( item ) {
    console.log('inside saveOrEdit')
    if(this.mode=='Add'){
      this.saveUser(item);
    }else if(this.mode=='Edit'){
      this.updateUser(item);
    }
  }

  saveUser(item){
    console.log('adding user  ::  ',item)
  	this.users=JSON.parse(JSON.stringify(item));
    this.userservice.save(item).subscribe(
      response => {
        console.log(response);
        this.handleSaveSuccess(response);
      } , 
      error => {
        console.log(error)
      });
  }
  
  updateUser(item){
  	this.users=JSON.parse(JSON.stringify(item));
    this.userservice.update(item).subscribe(
      response => {
        console.log('response  ::  ',response)
        this.handleSaveSuccess(response);
      } , 
      error => {
        console.log(error)
      });
  }
  
  deleteUser(item){
	  this.userservice.delete(item).subscribe(
      response => this.handleDeleteSuccess(response), 
      error => {
        console.log(error)
      });
	}

  handleDeleteSuccess(response){
		
    	if(response){	
    	  this.modalReference.close();
    		this.doReset();
    		this.listUsers();
    	}    	
		}

  handleSaveSuccess(response) {
      this.userModal = false;
      this.doReset();
      this.listUsers();
    }

    doCancel(){
      this.mode = 'Add';
      this.user = JSON.parse(JSON.stringify(new Users()))
  }

    doReset() {
	  	this.users = [];
      this.doCancel();
    }

}
