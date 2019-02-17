import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  users= [

    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },

    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },

    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },

    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }

  ]
  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById
  }
  createUser(user) {
    user._id = Math.random();
    this.users.push(user);
  }

  findUserById(userId) {
    for (var user of this.users)  {
      if (user._id === userId) {
        return user;
      }
    }
    return null;
  }

  findUserByUserName(userName) {
    for (var user of this.users)  {
      if (user.username === userName) {
        return user;
      }
    }
    return null;

  }
  findUserByCredentials(username, password){
    for (var user of this.users)  {
      if (user.username === username && user.password === password) {
        return user;
      }
    }
    return null;

  }

  updateUser(userId, user){
    for (var i = 0; i < this.users.length; i++) {
      if (user[i]._id === userId) {
        user[i] = user;
        return;
      }
    }

  }
  deleteUser(userId){

  }
  

}
