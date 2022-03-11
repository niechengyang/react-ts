import {
  FetchRecommendProductsActions,
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_START,
} from "./recommengProductsActions";
interface State {
  productList: any[];
  error: string | null;
  loading: boolean;
}
const initState: State = {
  productList: [],
  error: null,
  loading: true,
};

export default (state = initState, action: FetchRecommendProductsActions) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList: action.payload };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
