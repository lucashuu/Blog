import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	RecommendWrapper,
	RecommendItem,
	RecommendName
} from '../style';
class Recommend extends PureComponent {
	render() {
		const {
			list
		} = this.props;
		return (
			<RecommendWrapper>
			{
				list.map((item) => {
					return (
						<RecommendItem imgUrl= {item.get('imgUrl')} 
						key = {item.get('id')}
						>
							<RecommendName>
								<h3 className = 'title'>
								{item.get('title')}
								</h3>
							</RecommendName>
						</RecommendItem>
					);
				})
			}
			</RecommendWrapper>
		)
	}
}
const mapState = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState)(Recommend);