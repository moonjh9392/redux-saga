import { call, put, takeEvery } from 'redux-saga/effects';
import { getCatsSuccess } from './catState';
//call - url 호출
//put - 작업 수행
//takeEvery - 함수나 동작을 보고 트리거 함

//2. 함수 정의
function* workGetCatsFetch() {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  const formattedCats = yield cats.json();
  console.log(formattedCats);
  const formattedCatsShortened = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedCatsShortened));
}

//1. watcher saga 만들기
function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;
