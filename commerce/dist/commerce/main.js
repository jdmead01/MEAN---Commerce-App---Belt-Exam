(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/new/new.component */ "./src/app/products/new/new.component.ts");
/* harmony import */ var _products_update_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/update/update.component */ "./src/app/products/update/update.component.ts");
/* harmony import */ var _products_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/details/details.component */ "./src/app/products/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"] },
    { path: 'products/new', component: _products_new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'products/:id/edit', component: _products_update_update_component__WEBPACK_IMPORTED_MODULE_4__["UpdateComponent"] },
    { path: 'products/:id', component: _products_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n    border: solid 1px black;\n    padding: 20px;\n    margin: 0 20px;\n    min-height: 300px;\n}\nimg{\n  display: inline-block;\n}\nh1{\n  display: inline-block;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/* Style the header */\nheader {\n  background-color: #666;\n  padding: 30px;\n  text-align: center;\n  font-size: 35px;\n  color: white;\n}\n/* Container for flexboxes */\nsection {\n  display: flex;\n}\n/* Style the navigation menu */\nnav {\n  flex: 1;\n  background: #ccc;\n  padding: 20px;\n}\n/* Style the list inside the menu */\nnav ul {\n  list-style-type: none;\n  padding: 0;\n}\n/* Style the content */\narticle {\n  flex: 3;\n  background-color: #f1f1f1;\n  padding: 10px;\n}\n/* Style the footer */\nfooter {\n  background-color: #777;\n  padding: 10px;\n  text-align: center;\n  color: white;\n}\n/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */\n@media (max-width: 600px) {\n  section {\n    flex-direction: column;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n<div style=\"text-align:center\">\n  <header>\n      <img class=\"angular\" width=\"100\" alt=\"Angular Logo\" src=\"https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.maitrixinfotech.com%2Fimages%2Fsliders%2Fe-commerce.png&f=1\"> | <h1>Commerce Manager</h1>\n  </header>\n</div>\n\n  <section>\n\n    <article>\n      <div id=\"content\">\n        <router-outlet></router-outlet>\n      </div>\n    </article>\n  </section>\n\n  <footer>\n    <span>\n      <img width=\"175\" src=\"http://blog.adeel.io/wp-content/uploads/2016/11/mean-stack.png\" alt=\"\"> Coding Dojo Belt Exam 2019\n    </span>\n  </footer>\n\n  </body>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/details/details.component */ "./src/app/products/details/details.component.ts");
/* harmony import */ var _products_new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/new/new.component */ "./src/app/products/new/new.component.ts");
/* harmony import */ var _products_update_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/update/update.component */ "./src/app/products/update/update.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
                _products_details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
                _products_new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"],
                _products_update_update_component__WEBPACK_IMPORTED_MODULE_7__["UpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_10__["ProductsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.createNewProduct = function (newProduct) {
        return this.http.post('/new', newProduct);
    };
    ProductsService.prototype.getAllProducts = function () {
        return this.http.get('/all');
    };
    ProductsService.prototype.getOneProduct = function (id) {
        return this.http.get("/getOne/" + id);
    };
    ProductsService.prototype.destroy = function (id) {
        return this.http.delete("/destroy/" + id);
    };
    ProductsService.prototype.editProduct = function (updatedProduct) {
        return this.http.put('/update', updatedProduct);
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/products/details/details.component.css":
/*!********************************************************!*\
  !*** ./src/app/products/details/details.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tData {\n    font-size: 150%;\n    color: gray;\n    width: 100px;\n}\n\ntable {\n    margin: 0 10px;\n}\n\n.btn-danger {\n    margin-left: 10px;\n}\n\n.resetButton {\n    background-color: #E1D5E7;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.deleteButton {\n    margin-left: 10px;\n    background-color: #FF0000;\n    color: white;\n    border-radius: 5px;\n    padding: 3px;\n}\n\na {\n    margin-left: 100px;\n}\n\n"

/***/ }),

/***/ "./src/app/products/details/details.component.html":
/*!*********************************************************!*\
  !*** ./src/app/products/details/details.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Product Details</h2>\n<table *ngIf=\"thisProduct\">\n  <tr>\n    <td class=\"tData\">Name</td>\n    <td>{{thisProduct.name | titlecase}}</td>\n  </tr>\n  <tr>\n    <td class=\"tData\">Qty</td>\n    <td>{{thisProduct.qty}}</td>\n  </tr>\n  <tr>\n    <td class=\"tData\">Price</td>\n    <td>{{thisProduct.price | currency:\"USD\"}}</td>\n  </tr>\n</table>\n<a [routerLink]=\"['/']\"><button class=\"resetButton\">BACK</button></a>\n<button class=\"deleteButton\" (click)=\"destroy(thisProduct._id)\">DELETE</button>"

/***/ }),

/***/ "./src/app/products/details/details.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/details/details.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(productsService, route, router) {
        var _this = this;
        this.productsService = productsService;
        this.route = route;
        this.router = router;
        this.thisProduct = null;
        this.route.paramMap.subscribe(function (params) {
            console.log('from params in constructor', params.get('id'));
            _this.productsService.getOneProduct(params.get('id'))
                .subscribe(function (productReturned) {
                _this.thisProduct = productReturned;
            });
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.destroy = function (id) {
        this.productsService.destroy(id)
            .subscribe(function (data) {
            console.log('successful deletion', data);
        });
        this.router.navigateByUrl('/');
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/products/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/products/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/products/new/new.component.css":
/*!************************************************!*\
  !*** ./src/app/products/new/new.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n    width: 150px;\n    font-size: 150%;\n    color: gray;\n}\n\nbutton {\n    margin-right: 10px;\n    margin-left: 150px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.errors {\n    font-size: 90%;\n    font-weight: bold;\n    color: purple;\n}\n\n.resetButton {\n    background-color: #E1D5E7;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.createButton {\n    background-color: #66BBFF;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}"

/***/ }),

/***/ "./src/app/products/new/new.component.html":
/*!*************************************************!*\
  !*** ./src/app/products/new/new.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>New Product</h2>\n<ul *ngIf=\"errors\">\n  <li class=\"errors\" *ngFor=\"let error of errors\">{{error}}</li>\n</ul>\n<form name=\"newProductForm\" #newProductForm=\"ngForm\" (submit)=\"submitNewProduct()\">\n\n  <label for=\"name\">Name</label>\n  <input type=\"text\" name=\"name\"\n  required\n  minlength=\"3\"\n  [(ngModel)]=\"newProduct.name\"\n  #name = \"ngModel\"\n  >\n  <br>\n\n  <label for=\"qty\">Qty</label>\n  <input type=\"number\" name=\"qty\"\n  required\n  [(ngModel)] = \"newProduct.qty\"\n  #qty = \"ngModel\"\n  >\n  <br>\n\n  <label for=\"price\">Price</label>\n  <input type=\"number\" name=\"price\"\n  required\n  [(ngModel)] = \"newProduct.price\"\n  #price = \"ngModel\"\n  >\n  <br>\n\n  <a [routerLink]=\"['/']\"><button class=\"resetButton\">Reset</button></a>\n  <input class=\"createButton\" type=\"submit\" value=\"Create\">\n\n</form>\n"

/***/ }),

/***/ "./src/app/products/new/new.component.ts":
/*!***********************************************!*\
  !*** ./src/app/products/new/new.component.ts ***!
  \***********************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.errors = [];
        this.newProduct = {
            name: '',
            qty: '',
            price: ''
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.submitNewProduct = function () {
        var _this = this;
        console.log(this.newProduct);
        this.productsService.createNewProduct(this.newProduct)
            .subscribe(function (response) {
            console.log(response);
            console.log("it worked");
            if (response.error) {
                console.log(response.error);
                _this.errors = response.error;
            }
            else {
                _this.newProduct = {
                    name: '',
                    qty: '',
                    price: '',
                };
                _this.router.navigateByUrl('/');
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/products/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/products/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2, button {\n    display: inline-block;\n}\n\nh2 {\n    float: left;\n    margin-top: 0;\n}\n\nbutton, a {\n    float: right;\n}\n\nth {\n    background-color: #D3D3D3;\n    color: white;\n    padding: 5px;\n}\n\n.fancyButton {\n    background: linear-gradient(#E4C1C1, #4B5E6D);\n    color: white;\n    margin: 0 5px;\n}\n\n#aButton {\n    background: linear-gradient(#E7F1E6, #49606E);\n    color: white;\n    padding: 0 10px;\n}\n\n.rightMarg {\n    margin-right: 200px;\n}\n\n.goLeft {\n    float: left;\n}\n"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Product List</h2>\n<a [routerLink]=\"['new']\"><button id=\"aButton\">Add New Product</button></a>\n<br>\n<table class=\"table table-bordered\">\n    <thead>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Qty</th>\n        <th>Price</th>\n        <th>Actions</th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let product of allProducts\">\n            <td>{{product._id}}</td>\n            <td>{{product.name | titlecase}}</td>\n            <td>{{product.qty}}</td>\n            <td>{{product.price | currency:'USD'}}</td>\n            <td>\n                <div class=\"goLeft\">\n                    <a [routerLink]=\"[product._id, 'edit']\"><button  class=\"fancyButton\" >edit</button></a>\n                    <a [routerLink]=\"[product._id]\"><button  class=\"fancyButton\">details</button></a>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService) {
        this.productsService = productsService;
        this.allProducts = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getAllProducts()
            .subscribe(function (data) { _this.allProducts = data; });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/update/update.component.css":
/*!******************************************************!*\
  !*** ./src/app/products/update/update.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n    width: 150px;\n    font-size: 150%;\n    color: gray;\n}\n\nul {\n    list-style-type: none;\n}\n\nbutton {\n    margin-right: 10px;\n    margin-left: 150px;\n}\n\n.errors {\n    font-size: 90%;\n    font-weight: bold;\n    color: purple;\n}\n\n#updateButton {\n    background-color: #99FF99;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}\n\n.resetButton {\n    background-color: #E1D5E7;\n    color: #676967;\n    border-radius: 5px;\n    padding: 3px;\n}"

/***/ }),

/***/ "./src/app/products/update/update.component.html":
/*!*******************************************************!*\
  !*** ./src/app/products/update/update.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Update Product</h2>\n\n<ul *ngIf=\"errors\">\n  <li class=\"errors\" *ngFor=\"let error of errors\">{{error}}</li>\n</ul>\n\n<div  *ngIf=\"updatedProduct\">\n\n  <form name=\"editProductForm\" #editProductForm=\"ngForm\" (submit)=\"updateProduct()\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" name=\"name\"\n    required\n    minlength=\"3\"\n    [(ngModel)]=\"updatedProduct.name\"\n    #name=\"ngModel\"\n    >\n    <br>\n\n    <label for=\"qty\">Qty</label>\n    <input type=\"number\" name=\"qty\"\n    required\n    [(ngModel)]=\"updatedProduct.qty\"\n    #qty=\"ngModel\"\n    >\n    <br>\n\n    <label for=\"price\">Price</label>\n    <input type=\"number\" name=\"price\"\n    required\n    [(ngModel)]=\"updatedProduct.price\"\n    #price=\"ngModel\"\n    >\n    <br>\n    <a [routerLink]=\"['/']\"><button class=\"resetButton\">RESET</button></a>\n    <input [(ngModel)]=\"!editProductForm.valid\" id=\"updateButton\" type=\"submit\" value=\"UPDATE\">\n\n  </form>\n</div>\n\n<!-- [disabled] -->\n"

/***/ }),

/***/ "./src/app/products/update/update.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/update/update.component.ts ***!
  \*****************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(productsService, route, router) {
        var _this = this;
        this.productsService = productsService;
        this.route = route;
        this.router = router;
        this.errors = [];
        this.thisProduct = null;
        this.updatedProduct = null;
        this.route.paramMap.subscribe(function (params) {
            console.log('from params in constructor', params.get('id'));
            _this.productsService.getOneProduct(params.get('id'))
                .subscribe(function (productReturned) {
                _this.thisProduct = productReturned;
                _this.updatedProduct = {
                    name: _this.thisProduct.name,
                    qty: _this.thisProduct.qty,
                    price: _this.thisProduct.price,
                    _id: _this.thisProduct._id
                };
            });
        });
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.updateProduct = function () {
        var _this = this;
        console.log(this.updatedProduct);
        this.productsService.editProduct(this.updatedProduct)
            .subscribe(function (response) {
            console.log(response);
            console.log('it worked');
            if (response.error) {
                console.log(response.error);
                _this.errors = response.error;
            }
            else {
                _this.router.navigateByUrl('/');
            }
        }, function (err) {
            console.log(err);
        });
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/products/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/products/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jdmead/Downloads/finalproject-master 2/commerce/commerce/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map