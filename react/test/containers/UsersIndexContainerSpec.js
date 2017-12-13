import UsersIndexContainer from '../../src/containers/UsersIndexContainer';
import UsersIndexTile from '../../src/components/UsersIndexTile'

describe ('UsersIndexContainer', () => {
  let wrapper;
  let user1 = {
    users: [
      {
        id: 1,
        first_name: 'John',
        last_name: 'John',
        email: 'john@gmail.com',
        password: 'password',
        created_at: "Tue, 05 Dec 2017 21:30:13 UTC +00:00",
        updated_at: "Tue, 05 Dec 2017 21:30:13 UTC +00:00",
        role: 'admin'
      }
    ],
    current_user: {
      id: 1,
      first_name: 'John',
      last_name: 'John',
      email: 'john@gmail.com',
      role: 'admin'
    }
  }


  beforeEach(()  => {

    spyOn(global, 'fetch').and.callFake(() => {
      let responseBody = JSON.stringify(user1);
      let response = new Response(responseBody, {
        status: '200',
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      });
      return Promise.resolve(response);
    });

    wrapper = mount(<UsersIndexContainer />)

  });

  it('should have an intial state of an empty array', () => {
    expect(wrapper.find('UsersIndexContainer').first().nodes[0].state.users).toEqual([]);
  });

  it('should render a div tag', (done) => {
    setTimeout(() => {
      expect(wrapper.find('div')).toBePresent();
      done();
    }, 0)
  });

  it('should render the UsersIndexTile with different props, when users is not an empty array', (done) => {
    setTimeout(() => {
      expect(wrapper.find(UsersIndexTile).nodes[0].props).toEqual({
        id: 1,
        firstName: 'John',
        lastName: 'John',
        email: 'john@gmail.com',
        role: 'admin',
        onDelete: jasmine.any(Function)
      })
      done();
    }, 0)
  });

});
