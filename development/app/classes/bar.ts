import * as _ from 'lodash';
import {
    BarInterface
}
from '../interfaces/bar-interface';


export class Bar implements BarInterface {
    display_phone: string;
    id: string;
    image_url: string;
    name: string;
    rating: number;
    url: string;
    constructor(id, display_phone, image_url, name, rating, url) {
        _.assign(this, {
            id,
            display_phone,
            image_url,
            name,
            rating,
            url
        });
    }
}