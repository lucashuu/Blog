import React, {
	PureComponent
} from 'react';
import {
	connect
} from 'react-redux';
import {
	WriterWrapper,
	WriterList,
	WriterListInfo
} from '../style'
class Writer extends PureComponent {
	render() {
		const {
			list
		} = this.props;
		return (
			<WriterWrapper>
			<h3>Today's Select</h3>
			{
				list.map((item) => {
					return (
						<WriterList  
						key = {item.get('id')}
						>
						<img alt = '' className = 'pic'
						src= {item.get('imgUrl')}
						/>
							<WriterListInfo>
								<h3 className = 'title'>{item.get('title')}</h3>
								<p className = 'desc'>{item.get('desc')}</p>
							</WriterListInfo>
						</WriterList>
					);
				})
			}
			</WriterWrapper>
		)
	}
}
const mapState = (state) => ({
	list: state.getIn(['home', 'writerList'])
})
export default connect(mapState)(Writer);