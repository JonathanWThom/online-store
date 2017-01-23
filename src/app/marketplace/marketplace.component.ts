import { Component, Input } from '@angular/core';
import { Album } from 'app/album.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})

export class MarketplaceComponent {
  masterAlbumList: Album[] = [
   new Album('The Blue Album'),
   new Album('The White Album')
 ];
}
