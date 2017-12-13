import UsersIndexTile from '../../src/components/UsersIndexTile';

describe('UsersIndexTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <UsersIndexTile
        key={1}
        id={1}
        firstName='John'
        lastName='John'
        email='john@gmail.com'
        role='admin'
      />
    )
  })

  it('should render div tags', () => {
    expect(wrapper.find('div')).toBePresent();
  });

  it('should render the name in p tags', () => {
    expect(wrapper.find('p').nodes[0].textContent).toContain('Name: John John')
    expect(wrapper.find('p').nodes[1].textContent).toContain('Email: john@gmail.com')
    expect(wrapper.find('p').nodes[2].textContent).toContain('Role: admin')
  });
})
