export class Order {
    constructor(public id?: number,
                public creationDate?: string,
                public totalPrice?: number,
                public cardName?: string,
                public cardNumber?: string,
                public expiration?: string,
                public cvv?: string,
                public paymentMethod?: string
    ) {
    }

    static fromObject(object: Order): Order {
        return new Order(
            object.id,
            object.creationDate,
            object.totalPrice,
            object.cardName,
            object.cardNumber,
            object.expiration,
            object.cvv,
            object.paymentMethod
        );
    }
}
