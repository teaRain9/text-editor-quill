import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'text-editor-quill';

  editorForm!: FormGroup;


  ngOnInit() {

    this.editorForm.addControl('quill', new FormControl(''))

  }

}
