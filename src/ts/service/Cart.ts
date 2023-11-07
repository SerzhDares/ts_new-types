import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        let sum = 0;
        this._items.forEach(item => {
            sum += item.price;
        })

        return sum;
    }

    discountSum(discount: number): number {
        let sum = this.sum();
        let discountSum = sum - sum * discount;
        return discountSum;
    }

    deleteProduct(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}