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
        const sum = this._items.reduce((currentSum, currentNumber) => {
            return currentSum + currentNumber.price;
        }, 0)

        return sum;
    }

    discountSum(discount: number): number {
        const sum = this.sum();
        return sum - sum * discount;
    }

    deleteProduct(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}