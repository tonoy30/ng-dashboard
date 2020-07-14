import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [HeaderComponent, FooterComponent, SidebarComponent],
	imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],
	exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class CoreModule {}
