# Developing and Using a Component Library with Angular

This is an example of one way to develop a component library for use in Angular, TypeScript and Sass. It contains two directories:

* **components**: A wrapper application for the component library, which allows it to be developed and tested in isolation. The wrapper app can also be used to deliver documentation for the library -- e.g., lists of available components, usage examples, a style guide, etc.

* **some-app**: A bare-bones Angular app that demonstrates how to make use of the component library. Here, we're illustrating the monorepo scenario, in which the component library exists, and can be developed, alongside the app that uses it, but it'd also be possible to consume the library from a remote location (e.g., from separate GitHub repo, an NPM registry, etc.).

Both of these applications were generated with [angular-cli](https://cli.angular.io/).

The library itself is located in:

```
components/src/app/lib
```

and is authored as an indepenently distributable Angular module. The sample app imports it in its main `AppModule` (`app.module.ts`):

```
import { LibModule } from 'components';

@NgModule({
  imports: [
    ...
    LibModule
  ],
  ...
})
export class AppModule { }
```

and by doing so, exposes all of its components to the consuming application.

This sort of setup allows designers to develop the component library in isolation, without having to set up an end-to-end development environment, but also allows consumers of the library to make changes to the library and see those changes reflected immediately in their applications as they develop them. It also allows changes to the library and application to be tested, reviewed and committed simultaneously.

## Setting Up

First, if you haven't already, clone the repo, install Node (I'm running 8.7.0 with NPM 5.4.2) and then:

```
make
```

This will install both the library and the sample app.

To run the sample app:

```
make dev-app
```

Once it's running, open [http://localhost:4200](http://localhost:4200). You should see a list of people based on components (`PersonComponent` and `PeopleComponent`) defined in the library. Changes to either the app code or the library code should be reloaded in the browser automatically. Ctrl-C to stop.

To run the library's wrapper/demo/documentation app:

```
make dev-lib
```

and then open the app at [http://localhost:4201](http://localhost:4201).

So far, this has been tested only on my machine, so you may hit a bump. If you do, hit me up and we'll figure it out!
