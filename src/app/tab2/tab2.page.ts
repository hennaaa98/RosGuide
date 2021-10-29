import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular'; //import the popover controller

import { AboutKaffeKildenComponent } from '../components/about-kaffe-kilden/about-kaffe-kilden.component'; // import the component.


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //We inject the popover controller to the constructor 
  constructor(public popoverController: PopoverController) {

  }


  ngOnInit(){
  } 

  openPopover(){
    console.log("Pop over activated")
  }

   // User clicked on 'About this app' * And add the asynch clicked method.
   async aboutKaffeKilden() {
    const popover = await this.popoverController.create({ //first we create the popover, 
      component: AboutKaffeKildenComponent, //it expected a component property, we use our kaffeKilden
      translucent: true // state we want it to be translucent.
    });
    await popover.present(); //now it's ready to be called.
  }


}
