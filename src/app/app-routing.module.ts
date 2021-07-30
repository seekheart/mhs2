import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "monsters", redirectTo: "/monsters", pathMatch: "full"
  },
  {
    path: "", redirectTo: "/monsters", pathMatch: "full"
  },
  {
    path: "**", redirectTo: "/monsters", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
