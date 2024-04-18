import request from '/@/utils/request';
enum Api {
  AddCardSerialNumber = '/api/cardSerialNumber/add',
  DeleteCardSerialNumber = '/api/cardSerialNumber/delete',
  UpdateCardSerialNumber = '/api/cardSerialNumber/update',
  PageCardSerialNumber = '/api/cardSerialNumber/page',
  DetailCardSerialNumber = '/api/cardSerialNumber/detail',
}

// 增加显卡序号表
export const addCardSerialNumber = (params?: any) =>
	request({
		url: Api.AddCardSerialNumber,
		method: 'post',
		data: params,
	});

// 删除显卡序号表
export const deleteCardSerialNumber = (params?: any) => 
	request({
			url: Api.DeleteCardSerialNumber,
			method: 'post',
			data: params,
		});

// 编辑显卡序号表
export const updateCardSerialNumber = (params?: any) => 
	request({
			url: Api.UpdateCardSerialNumber,
			method: 'post',
			data: params,
		});

// 分页查询显卡序号表
export const pageCardSerialNumber = (params?: any) => 
	request({
			url: Api.PageCardSerialNumber,
			method: 'post',
			data: params,
		});

// 详情显卡序号表
export const detailCardSerialNumber = (id: any) => 
	request({
			url: Api.DetailCardSerialNumber,
			method: 'get',
			data: { id },
		});


