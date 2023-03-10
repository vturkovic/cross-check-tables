import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export const SidebarComponent = (props: {isAuthenticated: boolean})  => {

  const { collapseSidebar } = useProSidebar();

  const SIDEBAR_WIDTH = '270px';
  const SIDEBAR_COLLAPSED_WIDTH = '0px';
  const SIDEBAR_TRANSITION_DURATION = 400;
  const SIDEBAR_COLLAPSE_BUTTON_CONTENT = '>';

  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [collapseButton, setCollapseButton] = useState(true);

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  const handleCollapseButtonClick = () => {
    collapseSidebar();
    setCollapseButton(!collapseButton);
  };

  return (
    <div className='sidebar-container'>
      <Sidebar className="sidebar" width={SIDEBAR_WIDTH} collapsedWidth={SIDEBAR_COLLAPSED_WIDTH} transitionDuration={SIDEBAR_TRANSITION_DURATION}>
        <Menu>
          <SubMenu disabled={!props.isAuthenticated} label="Unakrsne provjere" defaultOpen={false} className='submenu'>

            <SubMenu label="Površine" defaultOpen={false} className='sub2menu'>
              <SubMenu label="Proizvodno nevezane potpore" defaultOpen={false} className='sub3menu'>
                <MenuItem
                  component={<Link to="/surfaces" />}
                  onClick={() => handleMenuItemClick('Površine - Osnovno plaćanje')}
                  className={activeMenuItem === 'Površine - Osnovno plaćanje' ? 'active' : ''}
                >Osnovno plaćanje</MenuItem>
              </SubMenu>

              <SubMenu label="Proizvodno vezane potpore" defaultOpen={false} className='sub3menu'>
                <MenuItem
                  component={<Link to="/pvp-p" />}
                  onClick={() => handleMenuItemClick('PVP-P')}
                  className={activeMenuItem === 'PVP-P' ? 'active' : ''}
                >PVP-P</MenuItem>
                <MenuItem
                  component={<Link to="/pvp-v" />}
                  onClick={() => handleMenuItemClick('PVP-V')}
                  className={activeMenuItem === 'PVP-V' ? 'active' : ''}
                >PVP-V</MenuItem>
                <MenuItem
                  component={<Link to="/pvp-sr" />}
                  onClick={() => handleMenuItemClick('PVP-ŠR')}
                  className={activeMenuItem === 'PVP-ŠR' ? 'active' : ''}
                >PVP-ŠR</MenuItem>
              </SubMenu>

              <SubMenu label="Mjera 10" defaultOpen={false} className='sub3menu'>
                <MenuItem
                  component={<Link to="/kfk" />}
                  onClick={() => handleMenuItemClick('KFK')}
                  className={activeMenuItem === 'KFK' ? 'active' : ''}
                >KFK</MenuItem>
                <MenuItem
                  component={<Link to="/muk" />}
                  onClick={() => handleMenuItemClick('MUK')}
                  className={activeMenuItem === 'MUK' ? 'active' : ''}
                >MUK</MenuItem>
                <MenuItem
                  component={<Link to="/mkš" />}
                  onClick={() => handleMenuItemClick('MKŠ')}
                  className={activeMenuItem === 'MKŠ' ? 'active' : ''}
                >MKŠ</MenuItem>
                <MenuItem
                  component={<Link to="/tvpv" />}
                  onClick={() => handleMenuItemClick('TVPV')}
                  className={activeMenuItem === 'TVPV' ? 'active' : ''}
                >TVPV</MenuItem>
              </SubMenu>

              <SubMenu label="Mjera 11" defaultOpen={false} className='sub3menu'>
                <MenuItem
                  component={<Link to="/ekop" />}
                  onClick={() => handleMenuItemClick('EKOP')}
                  className={activeMenuItem === 'EKOP' ? 'active' : ''}
                >EKOP</MenuItem>
                <MenuItem
                  component={<Link to="/eko" />}
                  onClick={() => handleMenuItemClick('EKO')}
                  className={activeMenuItem === 'EKO' ? 'active' : ''}
                >EKO</MenuItem>
              </SubMenu>
            </SubMenu>

              <SubMenu label="Stoka" defaultOpen={false} className='sub2menu'>
                <MenuItem
                  component={<Link to="/cattle" />}
                  onClick={() => handleMenuItemClick('Stoka - osnovno plaćanje')}
                  className={activeMenuItem === 'Stoka - osnovno plaćanje' ? 'active' : ''}
                >Osnovno plaćanje</MenuItem>
              </SubMenu>

              <MenuItem
                component={<Link to="/amounts" />}
                onClick={() => handleMenuItemClick('Količine')}
                className={activeMenuItem === 'Količine' ? 'active submenu' : 'sub2menu'}
              >Količine</MenuItem>

              <MenuItem
              component={<Link to="/ezp" />}
                onClick={() => handleMenuItemClick('EZP / Raznolikosti')}
                className={activeMenuItem === 'EZP / Raznolikosti' ? 'active submenu' : 'sub2menu'}
              >EZP / Raznolikosti</MenuItem>

            </SubMenu>
          </Menu>
      </Sidebar>
      <div className={collapseButton ? 'collapseButton open': 'collapseButton'} onClick={handleCollapseButtonClick}>
         <i>{SIDEBAR_COLLAPSE_BUTTON_CONTENT}</i>
      </div>
    </div>
    );
};
  
export default SidebarComponent;