import { Component } from '@angular/core';

//components
import { HeaderComponent } from '../../components/header/header.component';
import { CarroselComponent } from './../../components/carrosel/carrosel.component';
import { ComoFuncionaComponent } from "../../components/como-funciona/como-funciona.component";
import { FotoEstaticaComponent } from "../../components/foto-estatica/foto-estatica.component";
import { ProdutosComponent } from "../../components/produtos/produtos.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CarroselComponent, ComoFuncionaComponent, FotoEstaticaComponent, ProdutosComponent, FooterComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
