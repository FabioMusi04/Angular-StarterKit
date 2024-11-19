import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
   <div className="flex flex-col w-full min-h-screen">
      <p class="text-xl font-semibold text-green-500">
        About is working!
      </p>
    </div>
  `,
})
export class AboutComponent {

}
