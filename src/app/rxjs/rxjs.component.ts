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

    let timerVal = 10;//3000;
    log(`<h1>Observers and Observables</h1>`);
    m25();
    log('<br/>', 1);
    m26();
    log('<br/>', 1);
    m27();
    log('<br/>', 1);
    m28();
    setTimeout(function () {
      log('<br/>', 1);
      m29();
      setTimeout(function () {
        log(`<h1>Working with Observables</h1>`);
        m32();
        log('<br/>', 1);
        m33();
        log('<br/>', 1);
        m34();
        log('<br/>', 1);
        //m35(); // Triggers errors
        log('<br/>', 1);
        m43();
        log('<br/>', 1);

      }, timerVal);
    }, timerVal);


  }

  ngOnInit() { }
}

export interface Movies {
  title: string;
}

let htmlDataObservable: Observable<string>;
let htmlDataObserver: Observer<string>;
const numbers = [5, 10, 15];

htmlDataObservable = new Observable((obs: Observer<string>) => {
  htmlDataObserver = obs;
});

function log(value, skip = 0) {
  if (skip !== 1) {
    console.log(value);
  }

  if (skip !== 2) {
    htmlDataObserver.next(`<div> ${value} <div>`);
  }
}


// Module 2.5: Creating Your First Observable
function m25() {
  let title = 'Creating Your First Observable';
  log(`<h2>${title}</h2>`)
  let numbers = [5, 10, 15];
  let source = Observable.from(numbers);

  //subscribing to an observable
  class MyObserver implements Observer<number>{
    next(value) {
      log(`${title}, value: ${value}`);
    }

    error(e) {
      log(`${title}, error: ${e}`);
    }

    complete() {
      log(`${title}, complete`);
    }
  }

  source.subscribe(new MyObserver());
}

// Module 2.6: An Easier Observer
function m26() {
  let title = 'An Easier Observer';
  log(`<h2>${title}</h2>`)
  let source = Observable.from(numbers);

  source.subscribe(value => { log(`${title}, value: ${value}`); },
    e => { log(`${title}, error: ${e}`); },
    () => { log(`${title}, complete`); })
}

// Module 2.7: Using Observable.create
function m27() {
  let title = 'Using Observable.create';
  log(`<h2>${title}</h2>`)
  let source = Observable.create(observer => {
    for (let n of numbers) {

      if (n === 15) {
        observer.error('something went wrong!!!');
      }

      observer.next(n);
    }
    observer.complete();
  });

  source.subscribe(value => { log(`${title}, value: ${value}`); },
    e => { log(`${title}, error: ${e}`); },
    () => { log(`${title}, complete`); })
}

// Module 2.8: Going async with setTimeout
function m28() {
  let title = 'Going async with setTimeout';
  log(`<h2>${title}</h2>`)
  let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
      observer.next(numbers[index++]);

      if (index < numbers.length) {
        setTimeout(produceValue, 1000);
      }
      else {
        observer.complete();
      }
    };

    produceValue()
  });

  source.subscribe(value => { log(`${title}, value: ${value}`); },
    e => { log(`${title}, error: ${e}`); },
    () => { log(`${title}, complete`); });
}

// Module 2.9: Using RxJS Operators
function m29() {
  let title = 'Using RxJS Operators';
  log(`<h2>${title}</h2>`)

  let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
      observer.next(numbers[index++]);

      if (index < numbers.length) {
        setTimeout(produceValue, 1000);
      }
      else {
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

// Module 3.2: Processing Mouse Events
function m32() {
  let title = 'Processing Mouse Events';
  log(`<h2>${title}</h2>`);

  let circle = document.getElementById('circle');
  let source = Observable.fromEvent(document, 'mousemove')
    .map((e: MouseEvent) => {
      return {
        x: e.clientX,
        y: e.clientY
      };
    })
    .filter(value => value.x < 1500)
    .delay(150);

  function onNext(value) {
    circle.style.left = value.x + 'px';
    circle.style.top = value.y + 'px';
    log(`${title},`, 2);
    log(value, 2);
  }

  source.subscribe(onNext,
    e => { log(`${title}, error: ${e}`); },
    () => { log(`${title}, complete`); });
}

// Module 3.3: Sending Request with XmlHttpRequest
function m33() {
  let title = 'Sending Request with XmlHttpRequest';
  log(`<h2>${title}</h2>`);

  let button = document.getElementById('button');
  let click = Observable.fromEvent(button, 'click');

  function load(url: string) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
      let movies = JSON.parse(xhr.responseText);
      movies.forEach(m => {
        log(`<div>${m.title}</div>`);
      });
    });

    xhr.open('GET', url);
    xhr.send();
  }

  click.subscribe(e => load('assets/json/movies.json'),
    e => { log(`${title}, error: ${e}`); },
    () => { log(`${title}, complete`); });
}

// Module 3.4: Using flatMap to Process Inner Observables
function m34() {
  let title = 'Using flatMap to Process Inner Observables';
  log(`<h2>${title}</h2>`);

  let button = document.getElementById('button');
  let click = Observable.fromEvent(button, 'click');

  function load(url: string) {
    return Observable.create(observer => {
      let xhr = new XMLHttpRequest();

      xhr.addEventListener('load', () => {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        observer.next(data);
        observer.complete();
      });

      xhr.open('GET', url);
      xhr.send();
    });
  }

  click.flatMap(e => load('assets/json/movies.json'))
    .subscribe((movies: Array<Movies>) => {
                  movies.forEach(m => {
                    log(`<div>${m.title}</div>`);
                  });
                },
                e => { log(`${title}, error: ${e}`); },
                () => { log(`${title}, complete`); });
}

// Module 3.5: Implmenting Retry Logic with retryWhen
function m35() {
  let title = 'Implmenting Retry Logic with retryWhen';
  log(`<h2>${title}</h2>`);

  let button = document.getElementById('button');
  let click = Observable.fromEvent(button, 'click');

  function load(url: string) {
    return Observable.create(observer => {
      let xhr = new XMLHttpRequest();

      xhr.addEventListener('load', () => {
        if(xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          observer.next(data);
          observer.complete();
        }
        else{
          observer.error(xhr.statusText);
        }
      });

      xhr.open('GET', url);
      xhr.send();
    }).retryWhen(retryStrategy({attempts: 3, delay: 1500}));
  }

  function retryStrategy({attempts = 4, delay = 1000}) {
      return function(errors) {
        return errors
                  .scan((acc, value) => {
                    console.log(acc, value);
                    return acc + 1;
                  }, 0)
                  .takeWhile(acc => acc < attempts)
                  .delay(delay);
      };
  }

  click.flatMap(e => load('assets/json/moviess.json'))
    .subscribe((movies: Array<Movies>) => {
        movies.forEach(m => {
          log(`<div>${m.title}</div>`);
        });
      },
      e => { log(`${title}, error: ${e}`); },
      () => { log(`${title}, complete`); });
}

// Module 4.3: Dealing with Errors and Exceptions and unsubscribing
function m43() {
  let title = 'Dealing with Errors and Exceptions';
  log(`<h2>${title}</h2>`);

  let button = document.getElementById('button');
  let click = Observable.fromEvent(button, 'click');

  let source = Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.error("Stop!");
    //throw new Error("Stop!");
    observer.next(3);
    observer.complete();
  });

  source.subscribe(
            value => log(`<div>${title}: ${value}</div>`),
            error => log(`<div>${title} error: ${error}</div>`),
            () => log(`<div>${title}: complete</div>`)
        );

  /*
  function load(url: string) {
    return Observable.create(observer => {
      let xhr = new XMLHttpRequest();

      xhr.addEventListener('load', () => {
        if(xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          observer.next(data);
          observer.complete();
        }
        else{
          observer.error(xhr.statusText);
        }
      });

      xhr.open('GET', url);
      xhr.send();
    }).retryWhen(retryStrategy({attempts: 3, delay: 1500}));
  }

  function retryStrategy({attempts = 4, delay = 1000}) {
      return function(errors) {
        return errors
                  .scan((acc, value) => {
                    console.log(acc, value);
                    return acc + 1;
                  }, 0)
                  .takeWhile(acc => acc < attempts)
                  .delay(delay);
      };
  }

  click.flatMap(e => load('assets/json/movies.json'))
    .subscribe((movies: Array<Movies>) => {
        movies.forEach(m => {
          log(`<div>${m.title}</div>`);
        });
      },
      e => { log(`${title}, error: ${e}`); },
      () => { log(`${title}, complete`); }
    );
  */
}


