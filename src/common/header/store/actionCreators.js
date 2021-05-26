import *
as constants
from './constants';
import {
	fromJS
} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
})

export const gethandleInputFocus = () => ({
	type: constants.SEARCH_FOCUS,
});

export const gethandleInputBlur = () => ({
	type: constants.SEARCH_BLUR,
});
export const getMouseEnter = () => ({
	type: constants.MOUSE_ENTER
});
export const getMouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});
export const getchangePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('err');
		})
	}
};