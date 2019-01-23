
##### create simple app.
* run `ng add @angular/material`
* run `ng add @ngrx/store`
* run `ng generate @angular/material:nav nav`
##### create meta reducer that sync the state with the localStorage.
* run `npm install lodash`
##### refactor the meta reducer so we can inject it the httpService
##### add feature store that will use the metaReducer.
* run `ng generate @ngrx/schematics:feature feature`
