import React from 'react';
import {Route, Link} from 'react-router-dom';


const menus = [
	{
		name:'TRANG CHỦ',
		to:'/',
		exact: true
	},
	{
		name:'QUẢN LÝ SẢN PHẨM',
		to:'/product-list',
		exact: false
	},
];

const MenuLink =({ label, to, activeOnlyWhenExact}) => {
	// console.log( label, to, activeOnlyWhenExact);
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({match})=>{
				// console.log(match);
				var active = match ? 'active' : '';
				return(
					<li className={active}>
						<Link to={to}>
							{label}
						</Link>
					</li>

				)
			}}
		/>
	)
}


class Menu extends React.Component {

    showMenus = (e)=>{
		let result = null;
		if(e.length > 0){
			result = e.map((menu, index) =>{
				return (
					<MenuLink
						key={index}
						label={menu.name}
						to={menu.to}
						activeOnlyWhenExact={menu.exact} 
					/>
				)
			})
		}
	
		return result;
	
	}
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
					<a href="/" className="navbar-brand">CALL API</a>
					<button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavId">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							{this.showMenus(menus)}
						</ul>
					</div>
				</nav>
            </div>
        );
    }
}

Menu.propTypes = {};

export default Menu;
