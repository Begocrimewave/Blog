import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formNewPost: FormGroup;

  constructor(private postsService: PostsService) {
    this.formNewPost = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      imagen: new FormControl(''),
      fecha: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formNewPost.value);
    this.postsService.insert(this.formNewPost.value);
  }
}
