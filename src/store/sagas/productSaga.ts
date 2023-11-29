import {all, call, put, takeEvery} from 'redux-saga/effects';
import {setAllProducts} from '../slices/productSlice';
import {api} from '../../utils/apiConsts';
import {IProductListInterface} from '../../utils/interfaces';

export default function* fetchProductList() {
  yield all([takeEvery('product/getAllProducts', productSaga)]);
}

function* productSaga() {
  const data = yield call(() => fetch(api.allProducts));
  const formattedData: IProductListInterface = yield data.json();
  yield put(setAllProducts(formattedData));
}
