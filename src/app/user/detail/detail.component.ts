import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../product.service";
import { AuthService } from "../../auth.service";
import { CartService } from "src/app/cart.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "user-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  message:any;

  Product: any = {};
  baseImageUrl = `${environment.serverUrl}/images/`;

  ngOnInit() {
    this.activeRoute.params.subscribe((result:any) => {
      this.productService.getProduct(result.productId).subscribe(
        (result2:any) => {
          this.Product = result2["product"];
        },
        err => {
          console.log("Error", err)
          // alert("Error Occured Login Again");
          // this.authService.removeToken();
          // this.router.navigate(["/login"]);
        }
      );
    });
  }

  addToCart(productId:any) {
    this.cartService.addToCart(productId).subscribe((result: any) => {
      this.message = result.message;
    });
  }
}
