import React, {
	Component
} from 'react';
//让header和store建立连接
import {
	actionCreators
}
from './store';
import {
	actionCreators as loginActionCreators
} from '../../pages/login/store'
import '../../statics/iconfont/iconfont.css';
import {
	connect
} from 'react-redux';
import {
	Link
} from 'react-router-dom';
import {
	CSSTransition
} from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchWrapper,
	SearchInfoTitle,
	SearchInfoItem,
	SearchInfoList,
	SearchInfoSwitch,
	SearchInfo,
	Addition,
	Button
} from './style';
class Header extends Component {
	render() {
		const {
			focused,
			handleInputBlur,
			handleInputFocus,
			list,
			login,
			logout
		} = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo /> {/*可以写href属性*/}
				</Link>
				<Nav>
					<NavItem className='left active'>Main</NavItem>
					<NavItem className='left'>Download</NavItem>
					{
						login ? <NavItem onClick={logout} className='right'>Log Out</NavItem> : 
						<Link to='/login'><NavItem className='right'>Log In</NavItem></Link>
					}
					<NavItem className='right'>
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
					<CSSTransition
						in={focused}
						timeout={200}
						classNames="slide"
					>
					<NavSearch
						className={focused ? 'focused':''}
						onFocus={() => handleInputFocus(list)}
						onBlur={handleInputBlur}>
					</NavSearch>
					</CSSTransition>
						<span className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe606;
						</span>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className= 'writting'>
							<span className='iconfont'>&#xe61b;</span>
							Write
						</Button>
					</Link>
					<Button className= 'reg'>Sign Up</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
	getListArea() {
		const {
			focused,
			list,
			mouseIn,
			page,
			totalPage,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage
		} = this.props;
		const newList = list.toJS(); //将list从immutable对象转换成js对象
		const pageList = [];

		if (newList.length) { //第一次渲染时因为没有发送ajax请求而导致newlist为空从而key值为空，项目提示没有key值，故加此判断
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
				<SearchInfoTitle>
					Hot Search
					<SearchInfoSwitch onClick ={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
						<span ref={(icon) => {this.spinIcon = icon}}className='iconfont spin'>&#xe633;</span>
						Switch
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{pageList}
				</SearchInfoList>
			</SearchInfo>
			);
		} else {
			return null;
		}
	}
}
//这个组件和store做链接的时候，store里的数据如何映射到props上面
const mapStateToProps = (state) => {
	return {
		//仓库里的focused
		//immutable js 无线之间.调用
		//focused: state.getIn(['header', 'focused'])
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
	}
};
//组件和store做链接的时候，让组件可以调用store.dispatch方法
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			if (list.size === 0) {
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.gethandleInputFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.gethandleInputBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.getMouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.getMouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			if (page < totalPage) {
				dispatch(actionCreators.getchangePage(page + 1));
			} else {
				dispatch(actionCreators.getchangePage(1))
			}
		},
		logout() {
			dispatch(loginActionCreators.logout());
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);