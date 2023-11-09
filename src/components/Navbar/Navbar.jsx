import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='logo'>
          <span>board</span>
        </div>
        <div className='links'>
          <ul>
            <li>Products</li>
            <li>Apps & Games</li>
            <li>Features</li>
            <li>Support</li>
            <li>About</li>
          </ul>
        </div>
        <div className='shopping-icon'>
          <button
            onClick={() => {
              /* Handle the click event */
            }}
          >
            <img src='/src/assets/images/Banner/icon-bag.svg' alt='' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
