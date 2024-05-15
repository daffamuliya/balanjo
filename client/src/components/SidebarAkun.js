import SidebarItem from './SidebarItem';
import items from '../data/sidebarakun.json';

const SidebarAkun = () => {
  return (
    <div className="sidebar">
      <img src="/img/user.png" width="90" height="90" className="d-inline-block align-top" style={{ marginLeft: '70px', marginBottom: '25px' }} alt="React Bootstrap logo" />
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SidebarAkun;
