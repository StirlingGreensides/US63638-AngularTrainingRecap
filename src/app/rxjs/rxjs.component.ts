import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Observer } from 'rxjs/Observer';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})

export class RxjsComponent implements OnInit {
  htmlDataOuput: string = '';

  constructor() {
    htmlDataObservable.subscribe(val => { 
      this.htmlDataOuput += val; 
    });

    m25();
    log('<br/>');
    m26();
    log('<br/>');
    m27();
    log('<br/>');
    m28();
    setTimeout(function(){
      log('<br/>');
      m29();
    }, 3000);

    console.log(this.htmlDataOuput); 
  }

  ngOnInit() {  }
}

let htmlDataObservable: Observable<string>;
let htmlDataObserver: Observer<string>;
let numbers = [5, 10, 15];

htmlDataObservable = new Observable((obs: Observer<string>) => {
  htmlDataObserver = obs;
});

function log(value){
  console.log(value);
  htmlDataObserver.next(`<div> ${value} <div>`);
}


//Module 2.5: Creating Your First Observable
function m25(){
  let title = 'Creating Your First Observable';
  log(`<h2>${title}</h2>`)
  let numbers = [5, 10, 15];
  let source = Observable.from(numbers);

  //subscribing to an observable
  class MyObserver implements Observer<number>{
    next(value){
      log(`${title}, value: ${value}`);
    }
    
    error(e){
      log(`${title}, error: ${e}`);
    }

    complete(){
      log(`${title}, complete`);
    }
  }

  source.subscribe(new MyObserver());
}

//Module 2.6: An Easier Observer
function m26(){
  let title = 'An Easier Observer';
  log(`<h2>${title}</h2>`)
  let source = Observable.from(numbers);

  source.subscribe(value => { log(`${title}, value: ${value}`); },
                    e => { log(`${title}, error: ${e}`); },
                    () => { log(`${title}, complete`); })
}

//Module 2.7: Using Observable.create
function m27(){
  let title = 'Using Observable.create';
  log(`<h2>${title}</h2>`)
  let source = Observable.create(observer => {
    for (let n of numbers){

      if(n === 15){
        observer.error("something went wrong!!!");
      }

      observer.next(n);
    }
    observer.complete();
  });

  source.subscribe(value => { log(`${title}, value: ${value}`); },
                    e => { log(`${title}, error: ${e}`); },
                    () => { log(`${title}, complete`); })
}

//Module 2.8: Going async with setTimeout
function m28(){
  let title = 'Going async with setTimeout';
  log(`<h2>${title}</h2>`)
  let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
      observer.next(numbers[index++]);

      if(index < numbers.length){
        setTimeout(produceValue, 1000);
      }
      else{
        observer.complete();
      }
    };

    produceValue()
  });

  source.subscribe(value => { log(`${title}, value: ${value}`); },
                    e => { log(`${title}, error: ${e}`); },
                    () => { log(`${title}, complete`); });
}

//module 2.9: Using RxJS Operators
function m29(){
  let title = 'Using RxJS Operators';
  log(`<h2>${title}</h2>`)

  let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
      observer.next(numbers[index++]);

      if(index < numbers.length){
        setTimeout(produceValue, 1000);
      }
      else{
        observer.complete();
      }
    };

    produceValue()
  }).map(n => n * 2)
    .filter(n => n > 10);

  source.subscribe(value => { log(`${title}, value: ${value}`); },
                    e => { log(`${title}, error: ${e}`); },
                    () => { log(`${title}, complete`); });
}