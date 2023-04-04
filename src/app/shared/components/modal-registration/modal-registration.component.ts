import {Component} from '@angular/core';

@Component({
  selector: 'app-modal-registration',
  templateUrl: './modal-registration.component.html',
  styleUrls: ['./modal-registration.component.css']
})
export class ModalRegistrationComponent {
  public isRegistered:boolean = false;
  public isModalDialogVisible = false;
  showDialog(){
    this.isModalDialogVisible = true;
  }
  public Registration(){
    this.isRegistered=true;
  }
  closeDialog(){
    this.isModalDialogVisible = false;
  }

}
