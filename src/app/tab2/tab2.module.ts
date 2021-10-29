import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AboutKaffeKildenComponent } from '../components/about-kaffe-kilden/about-kaffe-kilden.component'; //Import Component.

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule 
  ],
  declarations: [Tab2Page, AboutKaffeKildenComponent], // declare the component
  entryComponents: [AboutKaffeKildenComponent] // as well as declaring entry component.
})
export class Tab2PageModule {}
