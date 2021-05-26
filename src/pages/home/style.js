import styled from 'styled-components';

export const HomeWrapper = styled.div `
	overflow: hidden;
	width: 960px;
	margin = 0 auto;
`;

export const HomeLeft = styled.div `
	float: left;
	margin-left: 15px;
	margin-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div `
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div `
	overflow:hidden;//内部元素为float，父组件需要添加该属性
	padding:20px 0 10px 0;
	margin-left:-18px;
	border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div `
float:left;
	height:32px;
	line-height:32px;
	margin-left:18px;
	padding-right:10px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	margin-bottom:18px;
	.topic-pic{
		display:block;//块级元素才可以浮动
		float:left;//使图片不影响文字
		width:32px;
		height:32px;
		margin-right:10px;
	}
`;
export const ListItem = styled.div `
	overflow: hidden;
	padding: 20 px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;
export const ListInfo = styled.div `
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold; 
		color: #333;
	}
	.desc {
		line-height: 18px;
		font-size: 13px;
		color: #999;
	}
`;
export const RecommendWrapper = styled.div `
	margin-top:-10x;
	margin:30px 0;
	width:280px;
`;
export const RecommendItem = styled.div `
	overflow: hidden;
	margin-top:10px;
	width:280px;
	height:50px;
	background:url(${(props)=>props.imgUrl});//styled-components获取传递的props语法
	background-size:contain;
`;
export const RecommendName = styled.div `
	float: left;
	.title {
		line-height: 40px;
		font-size: 18px;
		color: #000;
	}
`;
export const WriterWrapper = styled.div `
	width: 278px;
	border: 1px solid #dcdcdc;
	font-weight: bold; 
	color: #7777;
	font-size:18px;
	border-radius: 3px;
	height: 300px;
	text-align: left;
`;
export const WriterList = styled.div `
	overflow: hidden;
	padding: 20 px 0;
	margin-top:10px;
	margin-left: 5px;
	margin-bottom: 10px;
		.pic {
		display: block;
		width: 40px;
		height: 30px;
		float: left;
		border-radius: 2px;
	}
`;
export const WriterListInfo = styled.div `
	float: left;
	margin-left: 10px;
	.title {
		line-height: 10px;
		font-size: 10px;
		font-weight: bold; 
		color: #333;
	}
`;
export const LoadMore = styled.div `
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;`
export const BackTop = styled.div `
	position: fixed;
	right: 100px;
	bottom: 100px;
	width:  60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;`