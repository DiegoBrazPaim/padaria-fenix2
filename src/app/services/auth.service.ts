import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuario: any;
  private auth = getAuth(); // Instância do Firebase Auth

  constructor() {}

  login(usuario: any) {
    this.usuario = usuario;
  }

  getUsuarioNome() {
    return this.usuario ? this.usuario.nome : 'Visitante';
  }

  logout() {
    this.usuario = null;
  }

  // Método para cadastro no Firebase
  cadastroNoFirebase(email: string, senha: string) {
    return createUserWithEmailAndPassword(this.auth, email, senha);
  }

  // Método para login no Firebase
  loginNoFirebase(email: string, senha: string) {
    return signInWithEmailAndPassword(this.auth, email, senha);
  }
}