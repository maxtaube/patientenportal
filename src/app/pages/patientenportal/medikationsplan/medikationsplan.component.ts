import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
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
    Handelsname: 'Clopidogrel STADA 75mg',
    Form: 'Tabletten, Kapseln oder Pillen',
    Grund: '',
  }, {
    id: 2,
    Handelsname: 'Clopidogrel STADA 75mg',
    Form: 'Tabletten, Kapseln oder Pillen',
    Grund: 'Blutverdünner',
  }]

  constructor(private dialogService: NbDialogService, private _formBuilder: FormBuilder) {
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
      Handelsname: {
        title: 'Handelsname',
        type: 'string',
      },
      Form: {
        title: 'Form',
        type: 'string',
      },
      Grund: {
        title: 'Grund',
        type: 'string',
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
