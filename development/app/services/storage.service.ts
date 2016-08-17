import {
    Query
}
from '../classes/query';

import {
    Injectable
}
from '@angular/core';

@Injectable()

export class StorageService {
    retrieve(): Query {
        if (localStorage && localStorage.getItem('query')) {
            return JSON.parse(localStorage.getItem('query'));
        }
        else {
            return null;
        }
    }
    store(query: Query): void {
        if (localStorage) {
            const queryString = JSON.stringify(query);
            localStorage.setItem('query', queryString);
            console.log(localStorage);
        }
    }
}