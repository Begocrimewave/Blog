import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  arrCategorias: string[];

  constructor(private postsService: PostService) {
    this.arrCategorias = this.postsService.getAllCategorias();
    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      imagen: new FormControl(''),
      fecha: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit(formulario: any) {
    let newPost = formulario.value;
    newPost.id = this.postsService.getAll().length;
    formulario.reset();
    return this.postsService.createPost(newPost);
  }
}
