import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogService, NbIconLibraries } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { StepperMatComponent } from './stepper-mat/stepper-mat.component';
/* import { StepperMatComponent } from './stepper-mat/stepper-mat.component'; */
import { StepperComponent } from './stepper/stepper.component';

@Component({
  selector: 'ngx-medikationsplan',
  templateUrl: './medikationsplan.component.html',
  styleUrls: ['./medikationsplan.component.scss']
})
export class MedikationsplanComponent implements OnInit {
  showMyContainer: boolean = false;

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  }]

  constructor(private dialogService: NbDialogService, private _formBuilder: FormBuilder, private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('health', {
      'medicines': '<img src="../../../../assets/icons/default/icon_medikamente.svg" width="25px">'
    });
  }

  openStepperNebular() {
    this.dialogService.open(StepperComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }

  openStepperMaterial() {
    this.dialogService.open(StepperMatComponent);
  }
  
  isLinear = true;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  settings = {
    mode: 'internal',
    hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: true,
      position: 'right',
    },
  };

  
  
  /* source: LocalDataSource = new LocalDataSource(); */
  
  onSelectRow(event): void {
    console.log('Row selected');
    
  }

  testFunction(event): void {
    console.log("test");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
