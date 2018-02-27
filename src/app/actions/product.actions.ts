import { IProduct } from '../products/product';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS;';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS;';
export const DELETE_PRODUCT = 'DELETE_PRODUCT;';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS;';

export class LoadProductsActions {
    readonly type = LOAD_PRODUCTS;
    constructor(){}
}

export class LoadProductsSuccessActions{  
    readonly type = LOAD_PRODUCTS_SUCCESS;
    constructor(public payload: IProduct[]){}
}

export class DeleteProductActions {
    readonly type = DELETE_PRODUCT;
    constructor(public payload: number){}
}

export class DeleteProductSuccessActions{  
    readonly type = DELETE_PRODUCT_SUCCESS;
    constructor(public payload: number){}
}

export type Action  = LoadProductsActions 
                    | LoadProductsSuccessActions
                    | DeleteProductActions
                    | DeleteProductSuccessActions;