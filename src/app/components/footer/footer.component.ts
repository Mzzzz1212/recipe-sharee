import {Component} from "@angular/core"

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
    <footer class="bg-white border-t mt-12 py-6">
      <div class="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>© 2025 Mahizh. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
}

