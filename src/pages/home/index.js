import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer.js';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
} from './style';
import {
	BackTop
} from './style'
import {
	actionCreators
} from './store'

class Home extends PureComponent {
	handleScrollTop() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt = '' className="banner-img" src="https://miro.medium.com/max/3254/1*O2rM-vmbB-mCt7we3j8-Vg.png" alt=''/>
					<Topic/>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>
				{this.props.showScroll?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}			
			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow); //在组件被销毁的时候将对window绑定的事件移除
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow); //想window上绑定监听事件
	}
}
const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollTopShow(e) {
		if (document.documentElement.scrollTop > 100) { //滑动高度
			dispatch(actionCreators.toggleTopShow(true));
		} else {
			dispatch(actionCreators.toggleTopShow(false));
		}
	}
});

export default connect(mapState, mapDispatch)(Home);