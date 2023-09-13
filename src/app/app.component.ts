import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container-md">
      <router-outlet></router-outlet>
      <footer class="mt-3 text-center">
        <p>&copy;2023 Santiago Alves</p>
      </footer>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "client";
}
