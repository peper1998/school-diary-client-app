import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { CasesService } from 'src/app/_services/cases.service';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.scss']
})
export class AddCaseComponent implements OnInit {

  @Input() users: User[];
  dropdownItems = [];
  selectedItems = [];
  isFormOpened = false;
  dropdownSettings = {};
  caseTopicForm = new FormGroup({
    topic: new FormControl(),
  });

  caseUsersForm: FormGroup;

  loadContent: boolean = false;
  
  constructor(private fb: FormBuilder,
    private casesService: CasesService) {
  }

  private addCheckboxes() {
    this.dropdownItems.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.caseUsersForm.controls.users as FormArray).push(control);
    });
  }

  ngOnInit() {
  }

  open() {
    this.afterOpen();
    this.caseUsersForm = this.fb.group({
      users: new FormArray([])
    });
    this.addCheckboxes();
    this.isFormOpened = true;
  }

  submit() {
    const selectedIds = this.caseUsersForm.value.users
      .map((v, i) => v ? this.users[i].id : null)
      .filter(v => v !== null);
    this.casesService.addCase(this.caseTopicForm.controls.topic.value, selectedIds).subscribe(x=>console.log(x));

  }

  public save() {
    console.log(this.caseUsersForm.value);
  }

  afterOpen() {
    this.users.forEach(x => { this.dropdownItems.push({ item_id: x.id, item_text: x.name + " " + x.surname }) });
  }

}
