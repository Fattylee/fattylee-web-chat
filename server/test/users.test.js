const expect = require('expect');
const { User } = require('../utils/users');

let users = [];
beforeEach(() => {
  users = new User();
  users.users = [
  {
    id: '1',
    name: 'Abu Lulu',
    room: 'Node Course', 
  },
  {
    id: '2',
    name: 'Fattylee',
    room: 'React Course', 
  },
  {
    id: '3',
    name: 'Abdullah',
    room: 'Node Course', 
  },
  ];
});

describe('User', () => {
  it('should add a user', () => {
    const user = {
      id: '123',
      name: 'Abu Adnaan',
      room: 'Dark Web',
    };
    const userResult = users.addUser(user.id, user.name, user.room);
    expect(users.users.length).toBe(4);
    expect(users.users[3]).toEqual(userResult)
  }); //end it
  it('should get a user with a valid id', () => {
    const userResult = users.getUser('1');
    expect(users.users[0]).toEqual(userResult); 
  }); // end it
  it('should return undefined for a user with a non valid id', () => {
    const userResult = users.getUser('7');
    expect(userResult).toBeFalsy(); 
  }); // end it
  it('should remove user with a valid id', () => {
    const deletedUser = users.users[0];
    const userResult = users.removeUser('1');
    expect(users.users.length).toBe(2);
    expect(deletedUser).toEqual(userResult);
  }); // end it
  it('should not remove user with a non valid id', () => {
    const userResult = users.removeUser('7');
    expect(users.users.length).toBe(3);
    expect(userResult).toBeFalsy();
  }); // end it
  it('should get users list in a room', () => {
    const userResult = users.getUserList('Node Course');
    expect(userResult.length).toBe(2);
    expect(userResult).toEqual(['Abu Lulu', 'Abdullah']);
  }); // end it
  
}); // end User
