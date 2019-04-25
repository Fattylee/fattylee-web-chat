class User {
  constructor () {
    this.users = [];
  }
  
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  getUser(id) {
    return this.users.find(user => user.id === id);
  }
  removeUser(id) {
    const user = this.getUser(id);
    if(!user) return ;
    
    this.users = this.users.filter(user => user.id !== id);
    return user;
  }
  getUserList(room) {
    return this.users.filter(user => user.room === room).map(user => user.name);
  }
}

module.exports = { User };
